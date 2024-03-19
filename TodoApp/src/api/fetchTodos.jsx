export const fetchTodos = async  () => {

    let response = await fetch('https://testapi.bharathealpoint.com/items/trainning_practice_fields');
    let data = await response.json();
    // console.log(data.data)
     return data.data;
  };