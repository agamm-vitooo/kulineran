// src/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.example.com', // Ganti dengan baseURL API Anda
    // Anda bisa menambahkan konfigurasi default lainnya di sini
    // headers: { 'Authorization': 'Bearer token' }
});

export default instance;