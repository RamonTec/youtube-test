<template>
  <div class="fixed inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-semibold mb-4">Iniciar sesión</h2>

        <!-- Formulario de inicio de sesión -->
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-600">Correo electrónico</label>
            <input v-model="email" :class="{ 'border-red-500': !isEmailValid }" type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded">
            <div v-if="!isEmailValid" class="text-red-500 text-sm mt-1">Ingrese un correo electrónico válido.</div>
          </div>

          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-600">Contraseña</label>
            <div class="relative">
              <input v-model="password" :type="showPassword ? 'text' : 'password'" :class="{ 'border-red-500': !isPasswordValid }" id="password" name="password" class="mt-1 p-2 w-full border rounded">
              <button @click="toggleShowPassword" type="button" class="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 focus:outline-none">
                {{ showPassword ? 'Ocultar' : 'Mostrar' }}
              </button>
              <div v-if="!isPasswordValid" class="text-red-500 text-sm mt-1">La contraseña debe tener al menos 6 caracteres.</div>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <button type="submit" :disabled="!isFormValid" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              {{ isLoading ? 'Iniciando sesión...' : 'Iniciar sesión' }}
            </button>

            <NuxtLink to="/">
              <button type="button" class="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline">Regresar</button>
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { userStore } from '~/stores/user';

export default {
  data() {
    const userAction = userStore();
    const { saveUser } = userAction;
    return {
      saveUser,
      userAction,
      show: false,
      email: '',
      password: '',
      showPassword: false,
      isLoading: false,
      route: useRoute(),
    };
  },
  computed: {
    isEmailValid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email);
    },
    isPasswordValid() {
      return this.password.length >= 6;
    },
    isFormValid() {
      return this.isEmailValid && this.isPasswordValid;
    },
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    showSuccessNotification(message) {
      this.saveUser(
        this.email, this.password
      )
      this.isLoading = false;
      const toast = useToast();
      toast.success(message, { position: 'bottom-right', timeout: 3000 });
      navigateTo('/');
    },
    showErrorNotification(message) {
      this.isLoading = false;
      const toast = useToast();
      toast.error(message, { position: 'bottom-right', timeout: 3000 });
    },
    async login() {
      this.isLoading = true;
      const { login } = useFirebaseAuth();
      const loginUser = await login(this.email, this.password);
      console.log(loginUser);
      if (loginUser === undefined) this.showErrorNotification('¡Inicio de sesión fallido! Verifica tus credenciales.');
      this.showSuccessNotification('¡Inicio de sesión exitoso!');
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>