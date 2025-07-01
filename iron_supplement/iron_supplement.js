const imageList = [
  "image/suppl_1.jpg",
  "image/suppl_2.jpg",
  "image/suppl_3.jpg",
  "image/suppl_4.jpg",
  "image/suppl_5-1.jpg",
  "image/suppl_5-2.jpg",
  "image/suppl_6-1.jpg",
  "image/suppl_6-2.jpg"
];

const container = document.getElementById('imageSlider');

imageList.forEach(src => {
  const wrapper = document.createElement('div');
  wrapper.className = "flex-shrink-0 w-full snap-center flex justify-center";

  const img = document.createElement('img');
  img.src = src;
  img.className = "w-full max-w-xs h-64 object-contain";  // ✅ 圖片沒有 border/shadow/padding

  wrapper.appendChild(img);
  container.appendChild(wrapper);
});
