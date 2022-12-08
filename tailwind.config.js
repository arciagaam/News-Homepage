/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./build/*.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'inter'
      },
      colors:{
        ow: '#fffdfa',
        gb: '#c5c6ce',
        dgb : '#5d5f79',
        vdb: '#00001a',
        soft: {
          orange: '#e9ab53',
          red: '#f15e50'
        },
        dim: '#1e1e1e99'
      }
    },
  },
  plugins: [],
}
