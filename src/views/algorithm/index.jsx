import { useState } from 'react';
import './index.css';
// import reactSvg from '../../assets/react.svg'
// const imgArr = ['合并有序数组'];
const files = import.meta.glob('../../assets/**/*.png', {eager: true});
const imgArr = Object.keys(files).map(fileName => {
  let fileType = fileName.match(/([^/]*?)\.[^/.]+$/)[1] //用正则匹配出文件名称
  return {
    name: fileType, 
    src: files[fileName].default, 
  }
});
// const ticks = imgArr.map(item => ({name: item, src: import.meta.globEager(`../../assets/${item}.png`)}))
function Algorithm() {
  // const [count, setCount] = useState(0);
  console.log("🚀 ~ imgArr ~ imgArr:", imgArr)

  return (
    <>
      <div className="img-container">
        {imgArr.map((item) => (
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
