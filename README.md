Instituto Tecnológico de Oaxaca
Proyecto 1 en react native

Chavez Hernandez Luis Eduardo
Ingeniería en Sistemas Computacionales
Programación Web, Verano 2026



Este es un proyecto de práctica para aprender los fundamentos de React componentes, props, estado, eventos y renderizado de listas.
La aplicación web es una lista de tareas (notas) donde puedes agregar, completar/descompletar y eliminar tareas.
<img width="1125" height="641" alt="image" src="https://github.com/user-attachments/assets/f26149ae-2a09-4151-9296-f8fc09e83427" />

Tecnologías utilizadas

- **React** – Biblioteca para construir interfaces de usuario.
- **Vite** – Herramienta de construcción rápida para proyectos modernos.
- **gh-pages** – Para desplegar el proyecto en GitHub Pages.

 Instalación y ejecución local

1. Clona el repositorio:

'''https://github.com/LuisEduardoChavezLjx/t3_act5_react'''
2.Listo para hacer cambios


CUESTIONARIO
a) ¿Qué diferencia hay entre props y state en React?
Props son datos que se pasan de un componente padre a un componente hijo y son inmutables, el componente hijo no puede modificarlos. Solo puede leerlos y usarlos para renderizar.
State es un dato interno de un componente que puede cambiar, cuando el estado cambia, React rehace el componente para reflejar los nuevos datos. 
El estado es privado al componente que lo declara y se maneja con el hook

b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
key es un identificador unico que React utiliza para rastrear cada elemento de una lista cuando esta se modifica.
 
React puede determinar qué elementos han cambiado y actualizar solo esos en el DOM virtual, en lugar de volver a renderizar toda la lista, Esto mejora en el rendimiento y evita errores de estado.

c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
hook de react que permite agregar un estado a un componente nativo reciviendonos el valor inicial y devolviendo un array con dos terminos, el estado actual y una funcion para actualizarlo

'''En mi mini aplicacion lo ocupe aqui estableciendole un estado a mi componente tasks usando usestate para tener inicialmente el valor asignado 
const [tasks, setTasks] = useState([
  { id: 1, text: 'Aprender React', completed: false },
]);
const [inputValue, setInputValue] = useState('');'''

Repositorio

https://github.com/LuisEduardoChavezLjx/t3_act5_react
github pages

https://luiseduardochavezljx.github.io/t3_act5_react/



