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

//获取用户歌单详情
export function getUserPlaylist(uid = 344045107) {
  const url = URL + '/user/playlist';
  return axios.get(url, {
    params: {
      uid: uid
    }
  })
}
