import { useState } from 'react';
import './index.css';
const files = import.meta.glob('../../assets/**/*.png', {eager: true});
let imgArr = Object.keys(files).map(fileName => {
  let fileType = fileName.match(/([^/]*?)\.[^/.]+$/)[1] //用正则匹配出文件名称
  return {
    name: fileType, 
    src: files[fileName].default, 
  }
});
const group = ['string', 'array', 'two-points', 'window', 'matrix', 'map', 'intervals', 'stack', 'link', 'binary', 'graph', 'dp']
function Algorithm() {
  const [imgs, setImgs] = useState(imgArr);
  function changeGroup(value) {
    const arr = imgArr.filter(item=> item.name.includes(value))
    setImgs(arr);
  }
  return (
    <>
      {group.map(item => (
        <button key={item} onClick={() => changeGroup(item)}>{item}</button>
      ))}
      <div className="img-container">
        {imgs.map((item) => (
          <div className='img-box' key={item.name}>
            <h3 >{item.name}</h3>
            <img  src={item.src} alt={item.name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Algorithm;
