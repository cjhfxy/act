export const setToken = (token) => {
  localStorage.setItem("TOKEN", token);
};
//获取token
export const getToken = () => {
  return localStorage.getItem("TOKEN");
};
export const remoeToken = () => {
    return localStorage.removeItem('TOKEN')
}