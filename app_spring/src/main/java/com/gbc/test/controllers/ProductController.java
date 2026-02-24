package com.gbc.test.controllers;

import org.springframework.web.bind.annotation.*;
import com.gbc.test.models.Product;
import com.gbc.test.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;

// TODO: Implementar ProductController con los siguientes endpoints:
//
// GET    /api/products          - Listar todos los productos
// GET    /api/products/{id}     - Obtener producto por ID
// POST   /api/products          - Crear nuevo producto
// PUT    /api/products/{id}     - Actualizar producto
// DELETE /api/products/{id}     - Eliminar producto
//
// Usar ResponseEntity para retornar códigos HTTP apropiados:
// - 200 OK para GET y PUT exitosos
// - 201 CREATED para POST exitoso
// - 204 NO_CONTENT para DELETE exitoso
// - 404 NOT_FOUND cuando el producto no existe

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    // TODO: Implementar endpoints

}



