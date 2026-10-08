# 🌌 NEXUS STUDIO — Yeni Nesil 3D Dijital Ajans Web Sitesi (Demo)

> **"Sıradan Web'i Unutun. 3D Boyuta Geçin."**  
> Three.js WebGL donanım hızlandırmalı 3D etkileşimler, akıcı ve entegre sayfa geçişleri, ses tasarımı ve modern kreatif ajans portfolyosu.

[![GitHub Repo](https://img.shields.io/badge/GitHub-blackeker%2Fajans--demo-00f5d4?style=for-the-badge&logo=github)](https://github.com/blackeker/ajans-demo)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## ✨ Öne Çıkan Özellikler

- **🎨 3D WebGL Etkileşimli Merkez Sahneler (Three.js)**:
  - Çoklu geometri desteği: *Torus Knot*, *Kristal Geodezik İkozahedron*, *Kuantum Gyro Halkaları*.
  - Fare takip paralaksı ve 360° serbest sürükleme kontrolü.
  - Canlı 3D Kontrol HUD'ı (Renk teması, kafes / wireframe modu, dönüş hızı çarpanı).
  - 900+ parçacıklı dinamik kozmik toz ve ışık alanı.
  - Gerçek zamanlı 60 FPS donanım hızlandırmalı WebGL render.

- **⚡ Entegre Sayfa Geçişleri (Page Transitions)**:
  - Bölümler arası geçişlerde çalışan fütüristik shutter / deklanşör animasyonu.
  - Web Audio API ile sıfır harici dosya bağımlılığıyla üretilen sentetik ses efektleri (tıklama, hover, warp geçişi).
  - İsteğe bağlı açılıp kapatılabilen ses ve interaktif dinamik imleç (custom cursor).

- **💼 Zengin Ajans Bölümleri**:
  - **Uzmanlıklar (Services)**: Bento grid mimarisi ve kategorik filtreler.
  - **İnteraktif Maliyet & Süre Hesaplayıcı**: Müşterilerin bölüm sayısı, 3D seviyesi ve yapay zeka entegrasyonuna göre tahmini bütçeyi ve teslim süresini anlık hesapladığı interaktif modül.
  - **Seçkin Portfolyo**: Awwwards / FWA standardında proje kartları, modal detay önizlemesi ve canlı etiketler.
  - **AR-GE & Performans Laboratuvarı**: Gerçek zamanlı tarayıcı Canvas ve GPU düğüm simülasyonu, anlık FPS ve gecikme sayacı.
  - **İletişim & Brief Formu**: Hesaplanan bütçe ve kapsamı doğrudan forma aktaran akıllı başvuru sistemi.
  - **GitHub Entegrasyon Merkezi**: `blackeker/ajans-demo` deposuna tam entegrasyon, tek tıkla klonlama komutları.

---

## 🛠️ Teknoloji Yığını

| Katman | Teknoloji | Açıklama |
|---|---|---|
| **Frontend Kütüphanesi** | React 19 | En güncel React altyapısı |
| **3D & Grafikler** | Three.js | Donanım hızlandırmalı WebGL sahneleri |
| **Geliştirme & Paketleme**| Vite 6 | Ultra hızlı Hot Module Replacement (HMR) |
| **Ses Mimarisi** | Web Audio API | Sıfır MP3/WAV bağımlılığıyla saf sentez |
| **Tasarım Sistemi** | Pure CSS3 (Dark Mode) | Glassmorphism, CSS Custom Properties, Responsive Grid |
| **İkonografi** | Lucide React & Custom SVG | Vektörel, optimize edilmiş semboller |

---

## 🚀 Hızlı Başlangıç (Local Kurulum)

Projeyi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

```bash
# 1. Depoyu klonlayın
git clone https://github.com/blackeker/ajans-demo.git

# 2. Proje dizinine geçin
cd ajans-demo

# 3. Bağımlılıkları yükleyin
npm install

# 4. Yerel geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açarak 3D ajans deneyimini hemen test edebilirsiniz!

---

## 📦 Dağıtım & Yayınlama (Build)

Üretim sürümünü (production build) derlemek için:

```bash
npm run build
```

Çıktı `dist/` klasörüne derlenecektir. Vercel, Netlify, Cloudflare Pages veya GitHub Pages üzerinde sıfır konfigürasyon ile doğrudan yayınlanabilir.

---

## 👤 Geliştirici & GitHub

- **GitHub Profili**: [@blackeker](https://github.com/blackeker)
- **Depo**: [blackeker/ajans-demo](https://github.com/blackeker/ajans-demo)
- **Lisans**: MIT — Dilediğiniz gibi geliştirebilir, özelleştirebilir ve kullanabilirsiniz.
