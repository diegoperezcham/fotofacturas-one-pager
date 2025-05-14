// Datos del One Pager y sistema de autenticación
const correctPassword = 'fotofacturas2025';
let isAuthenticated = false;

// Verificar si hay una autenticación guardada en localStorage
if (localStorage.getItem('fotofacturas_auth') === 'true') {
    isAuthenticated = true;
}

// Contenido del One Pager - Secciones
const sections = {
    situacion: true,
    mercado: true,
    modelo: true,
    funcionamiento: true,
    app: true,
    impacto: true,
    crecimiento: true
};

// Función principal que inicia la aplicación
function init() {
    const appContainer = document.getElementById('app');
    
    if (isAuthenticated) {
        renderOnePager(appContainer);
    } else {
        renderPasswordScreen(appContainer);
    }
    
    // Detectar si es móvil
    checkMobile();
    window.addEventListener('resize', checkMobile);
}

// Verificar si es un dispositivo móvil
let isMobile = false;
function checkMobile() {
    isMobile = window.innerWidth < 768;
    
    // Ajustar estilos según el dispositivo
    if (isAuthenticated) {
        updateResponsiveStyles();
    }
}

// Actualizar estilos responsivos
function updateResponsiveStyles() {
    // Ajustes responsivos adicionales si son necesarios
}
// Renderizar pantalla de contraseña
function renderPasswordScreen(container) {
    container.innerHTML = `
        <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div class="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
                <div class="text-center mb-6">
                    <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center purple-bg">
                        <i data-lucide="lock" class="text-white"></i>
                    </div>
                    <h2 class="text-2xl font-bold mb-1">Contenido Protegido</h2>
                    <p class="text-gray-600">Ingresa la contraseña para acceder al One Pager de Fotofacturas</p>
                </div>
                
                <form id="password-form">
                    <div class="mb-4">
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Ingresa la contraseña"
                            autocomplete="off"
                            required
                        />
                        <p id="error-message" class="mt-2 text-sm text-red-600 hidden"></p>
                    </div>
                    
                    <button
                        type="submit"
                        class="w-full text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 purple-bg"
                    >
                        Acceder
                    </button>
                </form>
            </div>
        </div>
    `;
    
    // Inicializar iconos de Lucide
    lucide.createIcons();
    
    // Configurar evento de envío del formulario
    const form = document.getElementById('password-form');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    
    // Dar foco al input de contraseña
    passwordInput.focus();
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (passwordInput.value === correctPassword) {
            isAuthenticated = true;
            localStorage.setItem('fotofacturas_auth', 'true');
            renderOnePager(container);
        } else {
            errorMessage.textContent = 'Contraseña incorrecta. Inténtalo de nuevo.';
            errorMessage.classList.remove('hidden');
            passwordInput.value = '';
            passwordInput.focus();
        }
    });
}
// Renderizar el One Pager completo
function renderOnePager(container) {
    container.innerHTML = `
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <!-- Encabezado -->
            <div class="purple-bg text-white p-4 md:p-6 flex justify-between items-center">
                <div class="flex-1">
                    <h1 class="text-2xl md:text-4xl font-bold mb-1 md:mb-2">One Pager - Fotofacturas</h1>
                    <h2 class="text-base md:text-xl">Sistema de facturación automática de gastos.</h2>
                </div>
            </div>

            <!-- Contenido principal -->
            <div class="p-4 md:p-6">
                <div class="mb-6">
                    <h3 class="text-2xl md:text-3xl font-bold flex flex-wrap items-center gap-2">
                        <span class="purple-theme">Problema:</span>
                        <span class="text-black">Pago excesivo de impuestos</span>
                    </h3>
                </div>

                <div class="space-y-6">
                <!-- Situación actual -->
                    <div>
                        <div class="section-header" data-section="situacion">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="file-text" class="purple-theme"></i>
                                Situación actual
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="situacion-content">
                            <ul class="mt-3 space-y-2 ml-4 md:ml-8">
                                <li class="flex items-baseline gap-2">
                                    <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                    <span><strong>Estructura legal:</strong> SAPI de CV</span>
                                </li>
                                <li class="flex items-baseline gap-2">
                                    <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                    <span><strong>Antigüedad:</strong> +4 años en el mercado</span>
                                </li>
                                <li class="flex items-baseline gap-2">
                                    <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                    <span><strong>Tecnologías:</strong> JS / React Native / NET Core / Python</span>
                                </li>
                                <li class="flex items-baseline gap-2">
                                    <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                    <span><strong>Número de colaboradores:</strong> 2 socios, 4 asociados y 4 empleados</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Mercado -->
                    <div>
                        <div class="section-header" data-section="mercado">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="bar-chart-2" class="purple-theme"></i>
                                Mercado
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="mercado-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <p class="font-semibold mb-4">Iniciando en México y expandiendo por LATAM</p>
                                
                                <div id="market-circles" class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                                    <!-- Círculo TAM -->
                                    <div class="flex flex-col items-center">
                                        <div class="circle circle-lg tam-bg">
                                            <span class="text-white font-bold text-2xl">TAM</span>
                                        </div>
                                        <p class="text-xl font-bold mt-4 purple-theme">18.2B USD</p>
                                        <p>Contribuyentes LATAM.</p>
                                    </div>
                                    
                                    <!-- Círculo SAM -->
                                    <div class="flex flex-col items-center">
                                        <div class="circle circle-md sam-bg">
                                            <span class="text-white font-bold text-xl">SAM</span>
                                        </div>
                                        <p class="text-xl font-bold mt-4 purple-theme">7.1B USD</p>
                                        <p>Contribuyentes México.</p>
                                    </div>
                                    
                                    <!-- Círculo SOM -->
                                    <div class="flex flex-col items-center">
                                        <div class="circle circle-sm som-bg">
                                            <span class="text-white font-bold text-lg">SOM</span>
                                        </div>
                                        <p class="text-xl font-bold mt-4 purple-theme">1.1B USD</p>
                                        <p>5% Contribuyentes México.</p>
                                    </div>
                                </div>
                                
                                <div class="bg-gray-50 p-4 rounded-lg border-l-4 mt-4 text-center italic" style="border-color: #5501F1;">
                                    "Iniciamos en México con un modelo probado antes de expandirnos a LATAM."
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modelo de Negocio -->
                    <div>
                        <div class="section-header" data-section="modelo">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="package" class="purple-theme"></i>
                                Modelo de Negocio
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="modelo-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <p class="font-semibold mb-2">Centros de ingreso:</p>
                                <ul class="space-y-2 ml-6">
                                    <li class="flex items-baseline gap-2">
                                        <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                        <span>B2C - Suscripción mensual</span>
                                    </li>
                                    <li class="flex items-baseline gap-2">
                                        <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                        <span>B2B - Planes Corporativos a la medida</span>
                                    </li>
                                </ul>
                                <p class="font-semibold mt-3 mb-2">Canales:</p>
                                <p class="ml-6">AppStore / GooglePlay / Web</p>
                                
                                <div class="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div class="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center">
                                        <h4 class="text-xl font-bold mb-2">Plan Ahorro</h4>
                                        <p class="text-3xl font-bold mb-3 purple-theme">$99</p>
                                    </div>
                                    
                                    <div class="bg-white p-4 rounded-lg shadow-md border-2 text-center" style="border-color: #5501F1;">
                                        <h4 class="text-xl font-bold mb-2">Plan Individual</h4>
                                        <p class="text-3xl font-bold mb-3 purple-theme">$299</p>
                                    </div>
                                    
                                    <div class="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center">
                                        <h4 class="text-xl font-bold mb-2">Plan Empresarial</h4>
                                        <p class="text-3xl font-bold mb-3 purple-theme">$999</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Funcionamiento -->
                    <div>
                        <div class="section-header" data-section="funcionamiento">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="zap" class="purple-theme"></i>
                                Funcionamiento
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="funcionamiento-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <div class="flex flex-col items-center">
                                    <p class="text-center font-semibold mb-4 text-xl">Gráfico diagrama de flujo, explicando los 3 pasos:</p>
                                    
                                    <div class="w-full mb-6 flex justify-center">
                                        <div class="border border-gray-200 rounded-lg p-4 md:p-8 bg-white">
                                            <div id="flow-diagram" class="flex flex-col md:flex-row justify-center items-center gap-6">
                                                <div class="flex flex-col items-center">
                                                    <div class="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold purple-bg">1</div>
                                                    <p class="mt-2 font-medium">Crear cuenta</p>
                                                </div>
                                                
                                                <div id="connector-1" class="h-0.5 w-8 md:w-16 purple-bg"></div>
                                                
                                                <div class="flex flex-col items-center">
                                                    <div class="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold purple-bg">2</div>
                                                    <p class="mt-2 font-medium">Tomar foto</p>
                                                </div>
                                                
                                                <div id="connector-2" class="h-0.5 w-8 md:w-16 purple-bg"></div>
                                                
                                                <div class="flex flex-col items-center">
                                                    <div class="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold purple-bg">3</div>
                                                    <p class="mt-2 font-medium">Recibir factura</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- KPI's / App -->
                    <div>
                        <div class="section-header" data-section="app">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="users" class="purple-theme"></i>
                                KPI's / App
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="app-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div class="bg-gray-50 p-4 rounded-lg">
                                        <h4 class="text-lg font-semibold mb-3 purple-theme">Usuarios</h4>
                                        <ul class="space-y-3">
                                            <li class="flex items-center justify-between">
                                                <span>Usuarios registrados</span>
                                                <span class="font-bold text-xl">+9,923</span>
                                            </li>
                                            <li class="flex items-center justify-between">
                                                <span>Han facturado gastos</span>
                                                <span class="font-bold text-xl">+2,780</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div class="bg-gray-50 p-4 rounded-lg">
                                        <h4 class="text-lg font-semibold mb-3 purple-theme">Tickets</h4>
                                        <ul class="space-y-3">
                                            <li class="flex items-center justify-between">
                                                <span>Facturados</span>
                                                <span class="font-bold text-xl">+40,715</span>
                                            </li>
                                            <li class="flex items-center justify-between">
                                                <span>Procesados</span>
                                                <span class="font-bold text-xl">+53,979</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Impacto para nuestros usuarios -->
                    <div>
                        <div class="section-header" data-section="impacto">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="zap" class="purple-theme"></i>
                                Impacto para nuestros usuarios
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="impacto-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <div class="bg-gray-50 border-l-4 p-4 rounded-r-lg mb-4" style="border-color: #5501F1;">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <h4 class="font-semibold mb-1 purple-theme">Total de tickets facturados</h4>
                                            <p class="text-sm text-gray-600">Impacto directo en deducción de ISR</p>
                                        </div>
                                        <div class="text-3xl font-bold purple-theme">+$43 MDP</div>
                                    </div>
                                </div>
                                
                                <div class="bg-gray-50 border-l-4 p-4 rounded-r-lg" style="border-color: #5501F1;">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <h4 class="font-semibold mb-1 purple-theme">Deducción de IVA</h4>
                                            <p class="text-sm text-gray-600">Valor aproximado</p>
                                        </div>
                                        <div class="text-3xl font-bold purple-theme">+$6.8 MDP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Crecimiento -->
                    <div>
                        <div class="section-header" data-section="crecimiento">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="bar-chart-2" class="purple-theme"></i>
                                Crecimiento (Histórico y proyectado 2025)
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="crecimiento-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="bg-gray-50 p-4 rounded-lg">
                                        <h4 class="font-semibold mb-3 purple-theme">Ventas (MXN)</h4>
                                        <div class="h-40 relative">
                                            <div class="absolute bottom-0 left-0 w-full h-full flex items-end justify-around px-2">
                                                <div class="flex flex-col items-center">
                                                    <div class="w-16 rounded-t h-16 purple-bg">
                                                        <div class="absolute -top-6 w-16 text-center text-xs font-bold">$106,812 MXN</div>
                                                    </div>
                                                    <span class="text-xs mt-1">2023</span>
                                                </div>
                                                <div class="flex flex-col items-center">
                                                    <div class="w-16 rounded-t h-28 purple-bg">
                                                        <div class="absolute -top-6 w-16 text-center text-xs font-bold">$387,540 MXN</div>
                                                    </div>
                                                    <span class="text-xs mt-1">2024</span>
                                                </div>
                                                <div class="flex flex-col items-center">
                                                    <div class="w-16 rounded-t h-20" style="background-color: rgba(85, 1, 241, 0.7);">
                                                        <div class="absolute -top-6 w-16 text-center text-xs font-bold">$223,498 MXN</div>
                                                    </div>
                                                    <span class="text-xs mt-1 font-semibold">2025 (Proyección)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-gray-50 p-4 rounded-lg">
                                        <h4 class="font-semibold mb-3 purple-theme"># Usuarios</h4>
                                        <div class="h-40 relative">
                                            <div class="absolute bottom-0 left-0 w-full h-full flex items-end justify-around px-2">
                                                <div class="flex flex-col items-center">
                                                    <div class="w-16 rounded-t h-8 purple-bg">
                                                        <div class="absolute -top-6 w-16 text-center text-xs font-bold">48</div>
                                                    </div>
                                                    <span class="text-xs mt-1">2023</span>
                                                </div>
                                                <div class="flex flex-col items-center">
                                                    <div class="w-16 rounded-t h-24 purple-bg">
                                                        <div class="absolute -top-6 w-16 text-center text-xs font-bold">178</div>
                                                    </div>
                                                    <span class="text-xs mt-1">2024</span>
                                                </div>
                                                <div class="flex flex-col items-center">
                                                    <div class="w-16 rounded-t h-32" style="background-color: rgba(85, 1, 241, 0.7);">
                                                        <div class="absolute -top-6 w-16 text-center text-xs font-bold">240</div>
                                                    </div>
                                                    <span class="text-xs mt-1 font-semibold">2025 (Proyección)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <p class="text-sm text-gray-600 italic">Proyección al final de 2025: siguiendo el mismo % de crecimiento promedio en años pasados.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>

            <!-- Footer -->
            <div class="purple-bg text-white p-4 md:p-4 text-center">
                <p class="text-sm md:text-base">© 2025 Fotofacturas - Optimización de Impuestos Impulsada por IA</p>
            </div>
        </div>
    `;
    
    // Inicializar iconos de Lucide
    lucide.createIcons();
    
    // Configurar eventos para las secciones plegables
    setupSectionEvents();
    
    // Actualizar elementos responsivos
    updateResponsiveElements();
}
// Configurar eventos para las secciones plegables
function setupSectionEvents() {
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const sectionName = this.getAttribute('data-section');
            const content = document.getElementById(`${sectionName}-content`);
            const chevron = this.querySelector('.chevron');
            
            // Cambiar ícono de chevron
            if (chevron.getAttribute('data-lucide') === 'chevron-up') {
                chevron.setAttribute('data-lucide', 'chevron-down');
            } else {
                chevron.setAttribute('data-lucide', 'chevron-up');
            }
            
            // Actualizar íconos
            lucide.createIcons({
                icons: {
                    ChevronUp: {},
                    ChevronDown: {}
                },
                replaceAll: true
            });
            
            // Mostrar/ocultar contenido
            content.classList.toggle('hidden');
            sections[sectionName] = !sections[sectionName];
        });
    });
}

// Actualizar elementos responsivos
function updateResponsiveElements() {
    const flowDiagram = document.getElementById('flow-diagram');
    const connector1 = document.getElementById('connector-1');
    const connector2 = document.getElementById('connector-2');
    
    if (flowDiagram) {
        if (isMobile) {
            flowDiagram.classList.remove('flex-row');
            flowDiagram.classList.add('flex-col');
            
            connector1.classList.remove('h-0.5', 'w-8', 'md:w-16');
            connector1.classList.add('w-0.5', 'h-8');
            
            connector2.classList.remove('h-0.5', 'w-8', 'md:w-16');
            connector2.classList.add('w-0.5', 'h-8');
        } else {
            flowDiagram.classList.remove('flex-col');
            flowDiagram.classList.add('flex-row');
            
            connector1.classList.remove('w-0.5', 'h-8');
            connector1.classList.add('h-0.5', 'w-8', 'md:w-16');
            
            connector2.classList.remove('w-0.5', 'h-8');
            connector2.classList.add('h-0.5', 'w-8', 'md:w-16');
        }
    }
}

// Función para cerrar sesión (se puede agregar un botón si es necesario)
function logout() {
    localStorage.removeItem('fotofacturas_auth');
    isAuthenticated = false;
    location.reload();
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);