import axios from 'axios'
const URL = 'http://api.mtnhao.com';


//获取轮播
export function getBanner() {
  const url = `${URL}/banner`;
  return axios.get(url)
}

//获取推荐歌单
export function getPersonalized() {
  const url = `${URL}/personalized`;
  return axios.get(url)
}
