<script lang="ts">
	import '../app.css';
  	import { locale } from '../lib/i18n';

  function switchLanguage(lang: string) {
    $locale = lang;
    window.localStorage.setItem('locale', lang); // Persist user preference
  }

</script>


<slot></slot>
