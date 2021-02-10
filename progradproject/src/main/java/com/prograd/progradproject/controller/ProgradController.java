package com.prograd.progradproject.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.prograd.progradproject.dao.ProgradRepository;
import com.prograd.progradproject.model.Prograd;

@RestController
@CrossOrigin("http://localhost:4200")
public class ProgradController {
	@Autowired
	ProgradRepository progradrepo;
	@PostMapping(value="addPrograd")
	public String addprograd(@RequestBody Prograd prograd) {
		progradrepo.save(prograd);
		System.out.println("added");
		return "added";
	}
	
	@DeleteMapping(value="deleteprograd/{id}")
	public String deleteprograd(@PathVariable Long id) {
		progradrepo.deleteById(id);
		System.out.println("deleted successfully");
		return "deleted";
	}
	
	@GetMapping(value="getprograd")
	public List<Prograd> getprograd() {
//		return Optional.empty();
		return progradrepo.findAll();
	}
	@PutMapping(value="updateprograd")
	public Prograd updateprograd(@RequestBody Prograd prograd) {
		return progradrepo.save(prograd);
	}
	@GetMapping(value="getprogradbyid/{id}")
	public Optional<Prograd> getprogradbyid(@PathVariable Long id) {
//		return Optional.empty();
		return progradrepo.findById(id);
	}
}
