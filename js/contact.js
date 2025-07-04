// สร้างเมล็ดกาแฟลอย 20 เมล็ด
const beansContainer = document.getElementById('beans-container');
const beanCount = 20;

for(let i=0; i<beanCount; i++){
  const bean = document.createElement('div');
  bean.classList.add('coffee-bean');

  // สุ่มตำแหน่งแกน X (0-100vw)
  bean.style.left = Math.random() * 100 + 'vw';

  // สุ่ม delay และ duration สำหรับ animation
  const duration = 10 + Math.random() * 15; // 10-25 วินาที
  const delay = Math.random() * 20; // 0-20 วินาที

  bean.style.animationDuration = duration + 's';
  bean.style.animationDelay = delay + 's';

  beansContainer.appendChild(bean);
}
