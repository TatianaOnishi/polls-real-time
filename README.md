# 🚀 polls-real-time

API de votação em tempo real desenvolvida com foco em **performance, escalabilidade e baixa latência**, ideal para aplicações que exigem atualizações instantâneas de resultados.

Este repositório contém o **back-end** da aplicação. Ele gerencia criação de enquetes (*polls*), coleta de votos e entrega de resultados ao vivo para múltiplos clientes conectados simultaneamente.

---

## 🧠 Visão Geral

O **polls-real-time** fornece uma plataforma backend robusta para sistemas de votação interativos em tempo real — como enquetes interativas em eventos, quizzes dinâmicos e dashboards de resultados instantâneos.

A aplicação combina:

- APIs REST para operações CRUD de enquetes.  
- Atualizações em tempo real para clientes conectados.
- Armazenamento em cache para alta performance.  
- Orquestração via contêineres (Docker).  

Este projeto demonstra aplicação prática de:

- Arquitetura orientada a eventos.  
- Comunicação bidirecional com WebSockets.  
- Cache distribuído com Redis.  
- Backend escalável e preparado para múltiplas conexões simultâneas.  

---

## 📌 Funcionalidades Principais

### ⚡ Atualizações em Tempo Real
- Transmissão instantânea de votos
- Comunicação persistente via WebSockets
- Notificação automática para clientes conectados

### 📊 Gestão de Enquetes
- Criação de enquetes com múltiplas opções
- Registro de votos
- Consulta de resultados atualizados

### 🧱 Performance e Escalabilidade
- Uso de Redis para armazenamento rápido e sincronização
- Preparação para escalabilidade horizontal
- Baixa latência em operações de leitura e escrita

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| Node.js | Execução do servidor backend |
| TypeScript | Tipagem estática e maior robustez |
| WebSockets / Socket.IO | Comunicação em tempo real |
| Redis | Cache de alta performance e sincronização de estado |
| Docker | Contêinerização |
| Docker Compose | Orquestração de serviços |
| REST API | Estruturação de endpoints HTTP |

---

## 🏗️ Arquitetura

### 🔹 Backend

- Estrutura modular.
- Separação de responsabilidades.
- Endpoints REST para operações principais.
- Emissão de eventos para atualizações em tempo real.

### 🔹 Redis

- Armazena estado das votações.
- Garante leitura e escrita de alta performance.
- Permite sincronização entre múltiplas instâncias.

### 🔹 Comunicação Real-Time

- Conexão persistente com clientes.
- Broadcast de atualizações após cada voto.
- Modelo orientado a eventos.

---

## 📦 Requisitos

Antes de executar o projeto, é necessário ter:

- Docker instalado
- Docker Compose instalado

---

## ▶️ Como Executar

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/TatianaOnishi/polls-real-time.git
cd polls-real-time
```
### 2️⃣ Subir os containers

```bash
docker compose up -d
```

Isso iniciará:

- Servidor da API.
- Instância Redis.

## 🔍 Exemplos de Endpoints
Criar uma nova enquete
```
POST /polls
```

Votar em uma opção
```
POST /polls/:id/vote
```


## 🧪 Boas Práticas Aplicadas
- Código organizado e modular.
- Separação clara entre camadas.
- Arquitetura orientada a eventos.
- Estrutura preparada para escalabilidade.
- Ambiente isolado com Docker.
