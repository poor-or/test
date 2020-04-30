
    var ul=document.getElementsByTagName("ul")[0];

    var xhr=new XMLHttpRequest();

    xhr.onreadystatechange=function() {
        if(xhr.readyState===4 && xhr.status===200) {
            var movies=JSON.parse(xhr.responseText);
            console.log(movies);
            for(var i=0; i<movies.length; i++) {
                ul.innerHTML+=`
                    <li>
                        <p>电影名字为：${$areaList[i].name}</p>
                        <span>电影价格为：${movies[i].price}</span>
                    </li>
                `
            }
        }
    }
    xhr.open('GET','http://localhost:8081/mysql/27-电影数据.php', true);
    xhr.send();
   