<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PairProgramming - README</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root {
      --background: #1a202c;
      --foreground: #f7fafc;
      --primary: #d4af37;
      --primary-dark: #b8941f;
      --accent: #ffd700;
      --card-bg: #2d3748;
      --hover-bg: #4a5568;
      --secondary-text: #cbd5e0;
      --border-color: #4a5568;
    }
    body {
      background: var(--background);
      color: var(--foreground);
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
    }
    .glass-card {
      background: rgba(45, 55, 72, 0.8);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 0.75rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .hover-lift:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    .fade-in {
      animation: fadeIn 0.6s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .gold-shimmer {
      background: linear-gradient(90deg, var(--primary-dark), var(--primary), var(--primary-dark));
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  </style>
</head>
<body class="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
  <div class="container mx-auto px-4 py-16 max-w-5xl">
    <!-- Header -->
    <header class="text-center mb-12 fade-in">
      <img src="https://res.cloudinary.com/dmjusy7sn/image/upload/v1758981340/usuarios/xkajcqpxdbggr4q7ywjy.jpg" alt="PairProgramming Logo" class="w-32 h-32 mx-auto rounded-full border-4 border-[var(--primary)] shadow-lg mb-6 hover-lift transition-all duration-300">
      <h1 class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">PairProgramming</h1>
      <p class="text-xl text-[var(--secondary-text)] mt-2">Donde las Ideas se Convierten en Realidad Digital</p>
    </header>

    <!-- Intro Section -->
    <section class="glass-card p-8 mb-12 fade-in" style="animation-delay: 0.2s;">
      <h2 class="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-4">¿Qué es PairProgramming?</h2>
      <p class="text-[var(--secondary-text)] max-w-3xl mx-auto leading-relaxed">
        Somos una agencia de desarrollo <strong>full-stack</strong> apasionada por transformar tus sueños digitales en soluciones innovadoras y escalables. En <span class="text-[var(--primary)] font-semibold">PairProgramming</span>, combinamos tecnología de punta con un enfoque colaborativo para crear productos que impulsan tu negocio al siguiente nivel.
      </p>
      <p class="text-lg text-[var(--accent)] mt-4 font-semibold">¿Listo para transformar tu visión? ¡Nosotros ya lo estamos!</p>
    </section>

    <!-- Features Section -->
    <section class="mb-12 fade-in" style="animation-delay: 0.3s;">
      <h2 class="text-2xl lg:text-3xl font-bold text-[var(--primary)] text-center mb-8">Lo que Ofrecemos</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="glass-card p-6 hover-lift transition-all duration-300">
          <div class="text-3xl mb-4">🚀</div>
          <h3 class="text-lg font-semibold text-white">Soluciones a Medida</h3>
          <p class="text-[var(--secondary-text)] text-sm">Apps móviles, plataformas SaaS, CRMs y más, diseñados para tus necesidades.</p>
        </div>
        <div class="glass-card p-6 hover-lift transition-all duration-300">
          <div class="text-3xl mb-4">🎨</div>
          <h3 class="text-lg font-semibold text-white">Diseño Intuitivo</h3>
          <p class="text-[var(--secondary-text)] text-sm">Interfaces modernas y experiencias de usuario que enganchan.</p>
        </div>
        <div class="glass-card p-6 hover-lift transition-all duration-300">
          <div class="text-3xl mb-4">🤝</div>
          <h3 class="text-lg font-semibold text-white">Colaboración Total</h3>
          <p class="text-[var(--secondary-text)] text-sm">Trabajamos como socios para superar tus expectativas.</p>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="mb-12 fade-in" style="animation-delay: 0.4s;">
      <h2 class="text-2xl lg:text-3xl font-bold text-[var(--primary)] text-center mb-8">Tecnologías que Dominamos</h2>
      <div class="flex flex-wrap justify-center gap-4">
        <span class="bg-[var(--card-bg)] text-[var(--secondary-text)] text-sm px-4 py-2 rounded-full border border-[var(--border-color)]">Next.js</span>
        <span class="bg-[var(--card-bg)] text-[var(--secondary-text)] text-sm px-4 py-2 rounded-full border border-[var(--border-color)]">React</span>
        <span class="bg-[var(--card-bg)] text-[var(--secondary-text)] text-sm px-4 py-2 rounded-full border border-[var(--border-color)]">Tailwind CSS</span>
        <span class="bg-[var(--card-bg)] text-[var(--secondary-text)] text-sm px-4 py-2 rounded-full border border-[var(--border-color)]">Node.js</span>
        <span class="bg-[var(--card-bg)] text-[var(--secondary-text)] text-sm px-4 py-2 rounded-full border border-[var(--border-color)]">MongoDB</span>
        <span class="bg-[var(--card-bg)] text-[var(--secondary-text)] text-sm px-4 py-2 rounded-full border border-[var(--border-color)]">Flutter</span>
      </div>
    </section>

    <!-- Team Section -->
    <section class="glass-card p-8 mb-12 fade-in" style="animation-delay: 0.5s;">
      <h2 class="text-2xl lg:text-3xl font-bold text-[var(--primary)] text-center mb-6">Nuestro Equipo</h2>
      <p class="text-[var(--secondary-text)] max-w-3xl mx-auto text-center mb-6">
        Somos un equipo de <strong>innovadores y soñadores tecnológicos</strong> liderados por <strong>Pablo Rubiño</strong>, <strong>Esteban Aleart</strong>, y <strong>Josue Rendom</strong>. Con más de 5 años de experiencia en desarrollo full-stack, estamos obsesionados con crear soluciones que no solo funcionan, sino que inspiran.
      </p>
      <p class="text-lg text-[var(--accent)] font-semibold text-center">En PairProgramming, codificamos el futuro, ¡junto a ti!</p>
    </section>

    <!-- Get Started Section -->
    <section class="mb-12 fade-in" style="animation-delay: 0.6s;">
      <h2 class="text-2xl lg:text-3xl font-bold text-[var(--primary)] text-center mb-8">🚀 ¡Empieza Ahora!</h2>
      <div class="glass-card p-6 max-w-2xl mx-auto">
        <p class="text-[var(--secondary-text)] mb-6 text-center">Clona el repositorio y comienza a explorar nuestro universo digital:</p>
        <div class="bg-[var(--card-bg)] p-4 rounded-lg text-sm text-[var(--secondary-text)]">
          <code class="block mb-2">git clone https://github.com/tu-usuario/pairprogramming.git</code>
          <code class="block mb-2">cd pairprogramming</code>
          <code class="block mb-2">npm install</code>
          <code class="block">npm run dev</code>
        </div>
        <p class="text-[var(--secondary-text)] mt-4 text-center">Visita <a href="http://localhost:3000" class="text-[var(--primary)] hover:underline">http://localhost:3000</a> y ¡descubre la magia!</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="text-center fade-in" style="animation-delay: 0.7s;">
      <h2 class="text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-6">📬 ¡Hagamos Algo Increíble!</h2>
      <p class="text-[var(--secondary-text)] max-w-xl mx-auto mb-6">
        ¿Tienes una idea que quieres llevar al siguiente nivel? Contáctanos y empecemos a construir juntos.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="mailto:info@pairprogramming.com" class="bg-[var(--primary)] text-[var(--background)] font-semibold px-6 py-3 rounded-lg gold-shimmer hover:shadow-lg transition-all duration-300 inline-flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          info@pairprogramming.com
        </a>
        <a href="tel:+15551234567" class="border border-[var(--primary)] text-[var(--primary)] font-semibold px-6 py-3 rounded-lg hover:bg-[var(--primary)]/10 transition-all duration-300 inline-flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +1 (555) 123-4567
        </a>
      </div>
      <p class="text-[var(--secondary-text)] text-sm mt-4">Lunes a Viernes, 9:00 - 18:00</p>
    </section>

    <!-- Footer -->
    <footer class="mt-12 border-t border-[var(--border-color)] pt-6 text-center text-[var(--secondary-text)] text-sm fade-in" style="animation-delay: 0.8s;">
      <p>&copy; 2025 <span class="text-[var(--primary)] font-semibold">PairProgramming</span>. Todos los derechos reservados.</p>
      <p class="mt-2">Tu visión, nuestra pasión, un futuro digital sin límites.</p>
    </footer>
  </div>
</body>
</html>
