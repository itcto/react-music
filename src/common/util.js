// 播放数量
export const formatPlayCount = function (item) {
  return (item / 10000) > 9 ? `${Math.ceil(item / 10000)}万` : Math.floor(item)
};
