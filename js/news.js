// news list
let news_all = document.getElementById('news_list');
let news = document.createElement('li');
news.id = "n3"
news.classList.add('list-group-item');

news.innerHTML ='<time class="pe-5">2023/04/24</time><a href="news_23_04_24.html"><span class="nowrap">XPONENTIAL</span></a>';
news_all.appendChild(news);

