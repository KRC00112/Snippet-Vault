# 📦 Snippet Vault — Cloud Deployment Project

A code snippet manager app deployed on AWS EC2, served over HTTPS at a custom domain. The stack uses **Nginx** as the web server, **Duck DNS** for a free subdomain, and **Let's Encrypt** (via Certbot) for a trusted SSL/TLS certificate.

🌐 **Live site:** [https://snippetvault2138.duckdns.org](https://snippetvault2138.duckdns.org)

---

## 🧩 About the App

**Snippet Vault** is a browser-based code snippet manager that lets developers save, organize, and quickly retrieve reusable code — all in one place.

**Features include:**
- ✏️ **Save snippets:** with a title, programming language tag, and code body
- 🏷️ **Filter by language:** supports JavaScript, Python, Java, C#, C, C++, TypeScript, PHP, Go, and Swift
- 🔍 **Search by title:** to find snippets instantly
- 📋 **Copy to clipboard:** with a single click
- 🗑️ **Delete snippets:** you no longer need
- 💾 **Persistent storage:** via the browser's `localStorage`.Snippets survive page refreshes

---

## 🛠️ Stack Overview

| Layer | Tool |
|---|---|
| ☁️ Cloud Provider | AWS EC2 (Amazon Linux 2023) |
| ⚡ Web Server | Nginx |
| 🦆 Domain | Duck DNS |
| 🔒 SSL/TLS Certificate | Let's Encrypt via Certbot |
| ⚛️ Frontend | React (Vite build) |

---

## 📋 Deployment Overview

The server setup is broken into four parts:

### A. 🖥️ EC2 Instance: Provisioning & SSH Access

A `t3.micro` instance (free tier eligible) was provisioned with the **Amazon Linux 2023** AMI. A security group was configured to allow inbound **SSH (22)**, **HTTP (80)**, and **HTTPS (443)** traffic.

The instance is accessed via SSH using a `.pem` key pair:

```bash
# Fix overly open key permissions
chmod 400 "[private-key].pem"

# Connect to instance
ssh -i "[private-key].pem" [username]@[remote-hostname]
```

> ⚠️ Without `chmod 400`, SSH will refuse the key with a `Permissions too open` error.

---

### B. ⚡ Nginx: Install, Start, and Enable

Nginx was installed via the `dnf` package manager, started immediately, and enabled to run automatically on every boot:

```bash
sudo dnf update -y && sudo dnf install nginx
sudo nginx -v                   # Verify install
sudo systemctl start nginx      # Start the server
sudo systemctl enable nginx     # Auto-start on reboot
```

At this point, visiting `http://[public-ip]` will show the default **"Welcome to nginx!"** page. Confirming the server is live.

---
