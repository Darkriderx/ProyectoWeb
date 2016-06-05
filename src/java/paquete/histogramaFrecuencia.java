/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package paquete;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Luiz
 */
public class histogramaFrecuencia extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>\n" +
"<html>\n" +
"<head>\n" +
"	<meta charset=\"utf-8\">﻿\n" +
"	<link rel=\"stylesheet\" type=\"text/css\" href=\"css/histFrec.css\">\n" +
"	<title>Histograma de frecuencia</title>\n" +
"	<script type=\"text/javascript\" src=\"js/jquery-1.12.3.min.js\" /></script>\n" +
"	<script type=\"text/javascript\" src=\"js/jcanvas.js\"></script>\n" +
"	<script type=\"text/javascript\" src=\"js/dinamicInput.js\"></script>\n" +
"	<script type=\"text/javascript\" src=\"js/drawDiagram.js\"></script>\n" +
"</head>\n" +
"<body>\n" +
"	<div id=\"contenedor\">\n" +
"		<div id=\"histograma\">\n" +
"			<form id=\"HistForm\"><!--Formulario para llenar los datos del histograma-->\n" +
"				<input type=\"text\" name=\"numeroRectangulos\" id=\"numeroRectangulos\" placeholder=\"N&uacute;mero de rectangulos\" />\n" +
"				<br>\n" +
"				<input type=\"button\" id=\"actualizar\" name=\"actualizar\" value=\"Actualizar/Borrar\" class=\"boton\" />\n" +
"\n" +
"				<div id=\"table\"></div><!--Aqui se despelgará la tabla de input para llenar los datos del histograma-->\n" +
"				<span id=\"error\"></span>\n" +
"				<input type=\"button\" id=\"dibujar\" name=\"dibujar\" value=\"Dibujar!\" class=\"boton\" />\n" +
"				<input type=\"button\" id=\"borrarCanvas\" name=\"borrarCanvas\" value=\"Borrar diagrama!\" class=\"boton\" />\n" +
"			</form>\n" +
"		</div>\n" +
"		<canvas id=\"myCanvas\" height=\"500\" width=\"800\"></canvas><!--Linezo donde se dibujará el histograma-->\n" +
"	</div>\n" +
"	<div id=\"footer\"></div><!--Footer-->\n" +
"</body>\n" +
"</html>");
        }
    }
}
