const getdata = () => {
  const datas = JSON.parse(localStorage.getItem('book')) || [];

  return datas;
};

export default getdata;