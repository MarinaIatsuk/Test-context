class GET{
    static async getUsers(){
      try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        return await resp.json()
      } catch (e) {
        console.error(e);
        return (false) //если ошибка загрузки, то в состояние в App запишется false
      }
    }
}
export default GET