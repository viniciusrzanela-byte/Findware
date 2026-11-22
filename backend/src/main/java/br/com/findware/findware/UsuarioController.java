package br.com.findware.findware;

import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController 
{
    @Autowired
    private UsuarioRepository repository;
    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Usuario usuario) 
    {
        if (repository.findByEmail(usuario.getEmail()).isPresent()) {return ResponseEntity.badRequest().body("Este e-mail já está cadastrado!");}
        Usuario salvo = repository.save(usuario);
        return ResponseEntity.ok(salvo);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credenciais) 
    {
        String email = credenciais.get("email");
        String senha = credenciais.get("senha");
        Optional<Usuario> usuarioOpt = repository.findByEmail(email);
        if (usuarioOpt.isPresent() && usuarioOpt.get().getSenha().equals(senha)) {return ResponseEntity.ok(usuarioOpt.get());}
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("E-mail ou senha inválidos!");
    }

    @PostMapping("/enviar-codigo")
    public ResponseEntity<?> enviarCodigo(@RequestBody Map<String, String> request) 
    {
        String email = request.get("email");
        String codigo = request.get("codigo");
        if (repository.findByEmail(email).isEmpty()) {return ResponseEntity.badRequest().body("Este e-mail não está cadastrado!");}
        try 
        {
            SimpleMailMessage mensagem = new SimpleMailMessage();
            mensagem.setTo(email);
            mensagem.setSubject("Findware - Código de Recuperação de Senha");
            mensagem.setText("Olá!\n\n" + "Seu código de verificação para recuperar sua senha na Findware é: " + codigo + "\n\n" + "Caso não tenha solicitado, ignore este e-mail.");
            mailSender.send(mensagem);
            return ResponseEntity.ok(Map.of("mensagem", "Código enviado com sucesso!"));
        } 
        catch (Exception e) 
        {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Falha ao enviar o e-mail. Tente novamente.");
        }
    }

    private boolean senhaValida(String senha) 
    {
        if (senha == null || senha.length() < 8) {return false;}
        boolean temMaiuscula = senha.matches(".*[A-Z].*");
        boolean temMinuscula = senha.matches(".*[a-z].*");
        boolean temNumero = senha.matches(".*\\d.*");
        boolean temEspecial = senha.matches(".*[^A-Za-z0-9].*");
        return temMaiuscula && temMinuscula && temNumero && temEspecial;
    }

    @PutMapping("/redefinir-senha")
    public ResponseEntity<?> redefinirSenha(@RequestBody Map<String, String> request) 
    {
        String email = request.get("email");
        String novaSenha = request.get("novaSenha");
        if (email == null || !senhaValida(novaSenha)) {return ResponseEntity.badRequest().body("A nova senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial.");}
        Optional<Usuario> usuarioOpt = repository.findByEmail(email.trim().toLowerCase());
        if (usuarioOpt.isEmpty()) {return ResponseEntity.badRequest().body("Usuário não encontrado!");}
        Usuario usuario = usuarioOpt.get();
        usuario.setSenha(novaSenha);
        repository.save(usuario);
        return ResponseEntity.ok(Map.of("mensagem", "Senha alterada com sucesso!"));
    }
    
    @PutMapping("/foto")
    public ResponseEntity<?> atualizarFoto(@RequestBody Map<String, String> request) 
    {
        String email = request.get("email");
        String foto = request.get("foto");
        if (email == null || email.trim().isEmpty()) { return ResponseEntity.badRequest().body("E-mail obrigatório."); }
        Optional<Usuario> usuarioOpt = repository.findByEmail(email.trim().toLowerCase());
        if (usuarioOpt.isEmpty()) { return ResponseEntity.badRequest().body("Usuário não encontrado!"); }
        Usuario usuario = usuarioOpt.get();
        usuario.setFoto(foto);
        repository.save(usuario);
        return ResponseEntity.ok(usuario);
    }
}