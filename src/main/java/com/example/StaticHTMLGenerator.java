package com.example;

import java.io.*;
import java.nio.file.*;
import java.util.*;

import freemarker.template.*;

public class StaticHTMLGenerator {

    public static void main(String[] args) {
        try {
            // Setup FreeMarker
            Configuration cfg = new Configuration(Configuration.VERSION_2_3_31);
            cfg.setDirectoryForTemplateLoading(new File("src/main/resources/templates"));
            cfg.setDefaultEncoding("UTF-8");

            // Load index.ftl
            Template template = cfg.getTemplate("index.ftl");

            // Prepare data model (you can expand this as needed)
            Map<String, Object> dataModel = new HashMap<>();

            // Ensure output directory exists
            File outputDir = new File("static-export");
            if (!outputDir.exists()) outputDir.mkdirs();

            // Write HTML file
            try (Writer fileWriter = new FileWriter(new File(outputDir, "index.html"))) {
                template.process(dataModel, fileWriter);
            }

            System.out.println("✅ index.html generated successfully!");

            // Copy static files (CSS and JS)
            copyStaticResources();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void copyStaticResources() throws IOException {
        Path sourceStaticDir = Paths.get("src/main/resources/static");
        Path targetStaticDir = Paths.get("static-export");

        // Walk the file tree and copy each file
        Files.walk(sourceStaticDir).forEach(source -> {
            try {
                Path target = targetStaticDir.resolve(sourceStaticDir.relativize(source));
                if (Files.isDirectory(source)) {
                    if (!Files.exists(target)) Files.createDirectories(target);
                } else {
                    Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
                }
            } catch (IOException e) {
                System.err.println("❌ Failed to copy: " + source);
                e.printStackTrace();
            }
        });

        System.out.println("✅ Static assets copied to static-export/");
    }
}


// package com.example;

// import freemarker.template.Configuration;
// import freemarker.template.Template;
// import freemarker.template.TemplateExceptionHandler;

// import java.io.File;
// import java.io.FileWriter;
// import java.io.Writer;
// import java.util.HashMap;
// import java.util.Map;

// public class StaticHTMLGenerator {
//     public static void main(String[] args) {
//         try {
//             // Set up Freemarker config
//             Configuration cfg = new Configuration(Configuration.VERSION_2_3_31);
//             cfg.setDirectoryForTemplateLoading(new File("src/main/resources/templates"));
//             cfg.setDefaultEncoding("UTF-8");
//             cfg.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
//             cfg.setLogTemplateExceptions(false);
//             cfg.setWrapUncheckedExceptions(true);

//             // Load the main template
//             Template template = cfg.getTemplate("index.ftl");

//             // Prepare dummy data model (optional)
//             Map<String, Object> model = new HashMap<>();
//             model.put("employeesJson", "[]"); // optional if your JS handles everything

//             // Output directory
//             File outputDir = new File("static-export");
//             outputDir.mkdirs(); // create dir if not exist

//             // Write final output to index.html
//             File outputFile = new File(outputDir, "index.html");
//             Writer out = new FileWriter(outputFile);
//             template.process(model, out);
//             out.close();

//             System.out.println("✅ index.html generated at: " + outputFile.getAbsolutePath());

//         } catch (Exception e) {
//             e.printStackTrace();
//         }
//     }
// }
