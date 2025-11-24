import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/consultations", async (req, res) => {
    try {
      const validatedData = insertConsultationRequestSchema.parse(req.body);
      const consultationRequest = await storage.createConsultationRequest(validatedData);
      res.status(201).json(consultationRequest);
    } catch (error: any) {
      if (error.name === "ZodError") {
        res.status(400).json({ 
          error: "Validation failed", 
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          error: "Failed to create consultation request" 
        });
      }
    }
  });

  app.get("/api/consultations", async (_req, res) => {
    try {
      const requests = await storage.getAllConsultationRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to fetch consultation requests" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
