package br.com.findware.findware;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController 
{

    @Autowired
    private UsuarioRepository repository;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Usuario usuario) 
    {
        Optional<Usuario> existente = repository.findByEmail(usuario.getEmail());
        if (existente.isPresent()) {return ResponseEntity.badRequest().body("Este e-mail já está cadastrado!");}
        Usuario novoUsuario = repository.save(usuario);
        return ResponseEntity.ok(novoUsuario);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) 
    {
        Optional<Usuario> encontrado = repository.findByEmail(usuario.getEmail());
        if (encontrado.isPresent() && encontrado.get().getSenha().equals(usuario.getSenha())) {return ResponseEntity.ok(encontrado.get());}
        return ResponseEntity.status(401).body("E-mail ou senha inválidos!");
    }

    @PostMapping("/verificar-email")
    public ResponseEntity<?> verificarEmail(@RequestBody Map<String, String> request) 
    {
        String email = request.get("email");
        if (repository.findByEmail(email).isEmpty()) {return ResponseEntity.badRequest().body("E-mail não encontrado no sistema!");}
        return ResponseEntity.ok(Map.of("mensagem", "E-mail válido!"));
    }

    @PostMapping("/redefinir-senha")
    public ResponseEntity<?> redefinirSenha(@RequestBody Map<String, String> request) 
    {
        String email = request.get("email");
        String novaSenha = request.get("novaSenha");
        Optional<Usuario> usuarioOpt = repository.findByEmail(email);
        if (usuarioOpt.isEmpty()) {return ResponseEntity.badRequest().body("E-mail inválido.");}
        Usuario usuario = usuarioOpt.get();
        usuario.setSenha(novaSenha);
        repository.save(usuario);
        return ResponseEntity.ok(Map.of("mensagem", "Senha alterada com sucesso!"));
    }
}