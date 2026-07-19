# 🌾 Crop Advisory Chatbot

## 📖 Project Description

This is a Crop Advisory Chatbot that helps farmers get intelligent suggestions about crops, soil conditions, water requirements, and agricultural practices.  
The system uses a Node.js + Express backend connected to MongoDB to store and manage agricultural data and provide advisory responses.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- REST API
- (Add frontend if you used React or any UI)

---

## 🗄️ Database Choice

We are using **MongoDB with Mongoose** because it provides flexibility for handling dynamic agricultural data. The schema can evolve easily as new crop attributes, user queries, and recommendations are added over time.

---

## 🌱 Database Schema Overview

The system consists of the following collections:

- **User**: Stores farmer/user details
- **Crop**: Stores crop information like name, season, soil type, and water requirements
- **Chat**: Stores user queries and chatbot responses
- **Recommendation**: Stores advisory suggestions based on crop or user issues

---