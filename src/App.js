import { getData } from './services/api.js';
import { getStartedButton, loading, createModal } from './Nodes/nodes.js';

const showData = () => {
  setTimeout(async () => {
    const { pokemons } = await getData();

    pokemons.forEach((element) => {
      createModal(
        element.image,
        element.name,
        element.height,
        element.experience
      );
    });

    loading.style.opacity = '0';
  }, 2000);
};

//events
getStartedButton.addEventListener('click', () => {
  showData();
  loading.style.opacity = '1';
});
