//Tạo chuỗi query
module.exports.createQueryProductSearch = function(productName) {
  var data = {
    productName: productName
  };

  var query = encodeQueryData(data);
  if (query != '') {
    query = `&${query}`;
  }
  return query;
};

function encodeQueryData(data) {
  const ret = [];
  for (let d in data)
    if (data[d] != 0) {
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
  return ret.join('&');
}
