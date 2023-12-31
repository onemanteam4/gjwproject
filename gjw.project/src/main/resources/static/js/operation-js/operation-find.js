const mapContentList = document.querySelectorAll(".map-content-list li div");
const tabSelectorList = document.querySelectorAll(".tab-selector-list li");
const detailList = document.querySelectorAll(".detail");
const detail = document.querySelector(".detail");
const tabSelector = document.querySelector(".tab-selector-list");
const mapLink = document.querySelectorAll(".map-link ul li");

//리스트 선택 시 변경

for(let i= 0; i < tabSelectorList.length; i++) {
	tabSelectorList[i].onclick = () => {
		for(let j = 0; j < tabSelectorList.length; j++) {
			detailList[j].className = "detail";
			tabSelectorList[j].classList.remove("on");
			
			mapContentList[j].style.display = 'none';
			
			mapLink[j].classList.remove("on");
		}
		if(detailList[i].className == "detail") {
			detailList[i].classList.add("on");
			
			tabSelectorList[i].classList.add("on");
			mapContentList[i].style.display = 'block';
			
			mapLink[i].classList.add("on");
			
			}
		}
};

//지도 api 들고온 것.
var infowindow = new naver.maps.InfoWindow({
	content: contentString
});

var HOME_PATH = window.HOME_PATH || '.';

var gjw = new naver.maps.LatLng(35.8363, 129.2821),
    map = new naver.maps.Map('map', {
        center: gjw.destinationPoint(0, 500),
        zoom: 13
    }),
    marker = new naver.maps.Marker({
        map: map,
        position: gjw
    });

var contentString = [
        '<div class="iw_inner">',
        '   <h3>경주월드</h3>',
        '   <p>경상북도 경주시 천군동 191-5 | 보문로 554(우) 38117<br />',
        '       <br />',
        '       1544-8765 | #테마파크, #놀이동산<br />',
        '       <a href="http://localhost:8000" target="_blank">https://www.gjw.co.kr/</a>',
        '   </p>',
        '</div>'
    ].join('');

var infowindow = new naver.maps.InfoWindow({
    content: contentString
});

naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
});

infowindow.open(map, marker);
infowindow.close(map, marker);
var polyline = new naver.maps.Polyline({
    map: map,
    strokeColor :"blue",
    strokeStyle :"solid",
    path: [
        new naver.maps.LatLng(35.8403, 129.2014),
        new naver.maps.LatLng(35.8404, 129.2024),
        new naver.maps.LatLng(35.8383, 129.2025),
        new naver.maps.LatLng(35.8382, 129.2028),
        new naver.maps.LatLng(35.8384, 129.2036),
        new naver.maps.LatLng(35.8389, 129.2069),
        new naver.maps.LatLng(35.839, 129.2071),
        new naver.maps.LatLng(35.8392, 129.2072),
        new naver.maps.LatLng(35.8444, 129.2071),
        new naver.maps.LatLng(35.8446, 129.2074),
        new naver.maps.LatLng(35.8443, 129.2168),
        new naver.maps.LatLng(35.844, 129.2171),
        new naver.maps.LatLng(35.8405, 129.2172),
        new naver.maps.LatLng(35.8401, 129.2173),
        new naver.maps.LatLng(35.8382, 129.2184),
        new naver.maps.LatLng(35.8374, 129.219),
        new naver.maps.LatLng(35.8368, 129.2197),
        new naver.maps.LatLng(35.8358, 129.2217),
        new naver.maps.LatLng(35.8359, 129.2222),
        new naver.maps.LatLng(35.8365, 129.2225),
        new naver.maps.LatLng(35.8402, 129.2227),
        new naver.maps.LatLng(35.8403, 129.2227),
        new naver.maps.LatLng(35.8403, 129.2228),
        new naver.maps.LatLng(35.8398, 129.2313),
        new naver.maps.LatLng(35.84, 129.232),
        new naver.maps.LatLng(35.8403, 129.2324),
        new naver.maps.LatLng(35.8417, 129.2332),
        new naver.maps.LatLng(35.842, 129.2336),
        new naver.maps.LatLng(35.8421, 129.2337),
        new naver.maps.LatLng(35.8421, 129.2338),
        new naver.maps.LatLng(35.8396, 129.2413),
        new naver.maps.LatLng(35.8394, 129.2426),
        new naver.maps.LatLng(35.8395, 129.2436),
        new naver.maps.LatLng(35.8396, 129.2444),
        new naver.maps.LatLng(35.8398, 129.245),
        new naver.maps.LatLng(35.8461, 129.2576),
        new naver.maps.LatLng(35.8462, 129.258),
        new naver.maps.LatLng(35.8465, 129.2584),
        new naver.maps.LatLng(35.8491, 129.26),
        new naver.maps.LatLng(35.8499, 129.2608),
        new naver.maps.LatLng(35.8504, 129.2614),
        new naver.maps.LatLng(35.8509, 129.2626),
        new naver.maps.LatLng(35.851, 129.2629),
        new naver.maps.LatLng(35.8511, 129.2631),
        new naver.maps.LatLng(35.8528, 129.2676),
        new naver.maps.LatLng(35.8532, 129.2682),
        new naver.maps.LatLng(35.8538, 129.2687),
        new naver.maps.LatLng(35.8571, 129.2702),
        new naver.maps.LatLng(35.8571, 129.2703),
        new naver.maps.LatLng(35.8581, 129.2707),
        new naver.maps.LatLng(35.8587, 129.271),
        new naver.maps.LatLng(35.8588, 129.2712),
        new naver.maps.LatLng(35.8589, 129.2715),
        new naver.maps.LatLng(35.8589, 129.2717),
        new naver.maps.LatLng(35.8588, 129.2721),
        new naver.maps.LatLng(35.8586, 129.2723),
        new naver.maps.LatLng(35.8584, 129.2725),
        new naver.maps.LatLng(35.8571, 129.2734),
        new naver.maps.LatLng(35.8568, 129.2738),
        new naver.maps.LatLng(35.8544, 129.2785),
        new naver.maps.LatLng(35.854, 129.2789),
        new naver.maps.LatLng(35.8534, 129.2792),
        new naver.maps.LatLng(35.8524, 129.2792),
        new naver.maps.LatLng(35.8507, 129.2784),
        new naver.maps.LatLng(35.8499, 129.2784),
        
        new naver.maps.LatLng(35.8495, 129.2786),
        new naver.maps.LatLng(35.8493, 129.2788),
        new naver.maps.LatLng(35.8475, 129.2811),
        new naver.maps.LatLng(35.847, 129.2819),
        new naver.maps.LatLng(35.8463, 129.2837),
        new naver.maps.LatLng(35.8453, 129.286),
        new naver.maps.LatLng(35.8447, 129.2867),

        new naver.maps.LatLng(35.8447, 129.2867),
        new naver.maps.LatLng(35.8434, 129.2879),
        new naver.maps.LatLng(35.8422, 129.2885),
        new naver.maps.LatLng(35.8415, 129.2884),
        new naver.maps.LatLng(35.8411, 129.2883),
        new naver.maps.LatLng(35.8376, 129.2852),
        new naver.maps.LatLng(35.8371, 129.2847),
        new naver.maps.LatLng(35.8365, 129.2844),
        new naver.maps.LatLng(35.836, 129.2842),
        
 
		new naver.maps.LatLng(35.8352, 129.2843),
        new naver.maps.LatLng(35.8349, 129.2843),
       
        new naver.maps.LatLng(35.8363, 129.2821)

    ]
});










var infowindow = new naver.maps.InfoWindow({
	content: contentString
});


var HOME_PATH = window.HOME_PATH || '.';

var gjw = new naver.maps.LatLng(35.8363, 129.2821),
    map2 = new naver.maps.Map('map2', {
        center: gjw.destinationPoint(0, 500),
        zoom: 12
    }),
    marker = new naver.maps.Marker({
        map: map2,
        position: gjw
    });

var contentString = [
        '<div class="iw_inner">',
        '   <h3>경주월드</h3>',
        '   <p>경상북도 경주시 천군동 191-5 | 보문로 554(우) 38117<br />',
        '       <br />',
        '       1544-8765 | #테마파크, #놀이동산<br />',
        '       <a href="http://localhost:8000" target="_blank">https://www.gjw.co.kr/</a>',
        '   </p>',
        '</div>'
    ].join('');

var infowindow = new naver.maps.InfoWindow({
    content: contentString
});

naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map2, marker);
    }
});

infowindow.open(map2, marker);
infowindow.close(map2, marker);

var polyline2 = new naver.maps.Polyline({
    map: map2,
    strokeColor :"blue",
    strokeStyle :"solid",
    path: [
        new naver.maps.LatLng(35.7983, 129.1399),
        new naver.maps.LatLng(35.7973, 129.1393),
        new naver.maps.LatLng(35.7968, 129.1405),
        new naver.maps.LatLng(35.8003, 129.1436),
        new naver.maps.LatLng(35.8033, 129.1489),
        new naver.maps.LatLng(35.8042, 129.1474),
        new naver.maps.LatLng(35.8107, 129.1449),
        new naver.maps.LatLng(35.8149, 129.1445),
        new naver.maps.LatLng(35.8181, 129.1444),
        new naver.maps.LatLng(35.8212, 129.1444),
        new naver.maps.LatLng(35.8206, 129.1416),
        new naver.maps.LatLng(35.8191, 129.1396),
        new naver.maps.LatLng(35.8187, 129.1429),
        new naver.maps.LatLng(35.8189, 129.1475),
        new naver.maps.LatLng(35.8204, 129.1508),
        new naver.maps.LatLng(35.8217, 129.1537),
        new naver.maps.LatLng(35.8284, 129.158),
        new naver.maps.LatLng(35.8309, 129.1598),
        new naver.maps.LatLng(35.8348, 129.1628),
        new naver.maps.LatLng(35.8394, 129.1653),
        new naver.maps.LatLng(35.8411, 129.1664),
        new naver.maps.LatLng(35.8436, 129.1698),
        new naver.maps.LatLng(35.845, 129.1729),
        new naver.maps.LatLng(35.8437, 129.1786),
        new naver.maps.LatLng(35.8417, 129.185),
        new naver.maps.LatLng(35.8408, 129.1876),
        new naver.maps.LatLng(35.8395, 129.1897),
        new naver.maps.LatLng(35.8383, 129.1924),
        new naver.maps.LatLng(35.837, 129.1959),
        new naver.maps.LatLng(35.8372, 129.1993),
        new naver.maps.LatLng(35.8383, 129.2034),
        new naver.maps.LatLng(35.8389, 129.207),
        new naver.maps.LatLng(35.8416, 129.2072),
        new naver.maps.LatLng(35.8445, 129.2073),
        new naver.maps.LatLng(35.8445, 129.2098),
        new naver.maps.LatLng(35.8444, 129.212),
        new naver.maps.LatLng(35.8444, 129.2124),
        new naver.maps.LatLng(35.8443, 129.2168),
        new naver.maps.LatLng(35.844, 129.2171),
        new naver.maps.LatLng(35.8412, 129.2171),
        new naver.maps.LatLng(35.8405, 129.2172),
        new naver.maps.LatLng(35.8401, 129.2173),
        new naver.maps.LatLng(35.8382, 129.2183),
        new naver.maps.LatLng(35.8375, 129.2189),
        new naver.maps.LatLng(35.8369, 129.2197),
        new naver.maps.LatLng(35.8358, 129.2215),
        new naver.maps.LatLng(35.8358, 129.2217),
        new naver.maps.LatLng(35.8358, 129.2219),
        new naver.maps.LatLng(35.8358, 129.222),
        new naver.maps.LatLng(35.8359, 129.2222),
        new naver.maps.LatLng(35.8361, 129.2224),
        new naver.maps.LatLng(35.8363, 129.2225),
        new naver.maps.LatLng(35.8365, 129.2225),
        new naver.maps.LatLng(35.8402, 129.2227),
        new naver.maps.LatLng(35.8403, 129.2227),
        new naver.maps.LatLng(35.8403, 129.2228),
        new naver.maps.LatLng(35.8398, 129.2313),
        new naver.maps.LatLng(35.8399, 129.2317),
        new naver.maps.LatLng(35.84, 129.232),
        new naver.maps.LatLng(35.8403, 129.2323),
        new naver.maps.LatLng(35.8417, 129.2333),
        new naver.maps.LatLng(35.842, 129.2336),
        new naver.maps.LatLng(35.8421, 129.2337),
        new naver.maps.LatLng(35.8421, 129.2338),
        new naver.maps.LatLng(35.8396, 129.2413),
        new naver.maps.LatLng(35.8394, 129.2425),
        new naver.maps.LatLng(35.8395, 129.2436),
        new naver.maps.LatLng(35.8398, 129.245),
        new naver.maps.LatLng(35.8461, 129.2576),
        new naver.maps.LatLng(35.8462, 129.258),
        new naver.maps.LatLng(35.8463, 129.2582),
        new naver.maps.LatLng(35.8465, 129.2584),
        new naver.maps.LatLng(35.8491, 129.26),
        new naver.maps.LatLng(35.8499, 129.2608),
        new naver.maps.LatLng(35.8502, 129.2611),
        new naver.maps.LatLng(35.8504, 129.2614),
        new naver.maps.LatLng(35.8509, 129.2626),
        new naver.maps.LatLng(35.8509, 129.2628),
        new naver.maps.LatLng(35.851, 129.263),
        new naver.maps.LatLng(35.8511, 129.2631),
        new naver.maps.LatLng(35.8528, 129.2676),
        new naver.maps.LatLng(35.8532, 129.2681),
        new naver.maps.LatLng(35.8535, 129.2685),
        new naver.maps.LatLng(35.8539, 129.2688),
        new naver.maps.LatLng(35.8586, 129.271),
        new naver.maps.LatLng(35.8588, 129.2712),
        new naver.maps.LatLng(35.8589, 129.2715),
        new naver.maps.LatLng(35.8589, 129.2717),
        new naver.maps.LatLng(35.8588, 129.2719),
        new naver.maps.LatLng(35.8588, 129.2721),
        new naver.maps.LatLng(35.8586, 129.2723),
        new naver.maps.LatLng(35.8585, 129.2725),
        new naver.maps.LatLng(35.8571, 129.2734),
        new naver.maps.LatLng(35.8568, 129.2738),
        new naver.maps.LatLng(35.8545, 129.2784),
        new naver.maps.LatLng(35.854, 129.2788),
        new naver.maps.LatLng(35.8537, 129.2791),
        new naver.maps.LatLng(35.8533, 129.2792),
        new naver.maps.LatLng(35.8528, 129.2792),
        new naver.maps.LatLng(35.8507, 129.2784),
        new naver.maps.LatLng(35.8504, 129.2784),
		new naver.maps.LatLng(35.8495, 129.2786),
        new naver.maps.LatLng(35.8493, 129.2788),
        new naver.maps.LatLng(35.8474, 129.2811),
        new naver.maps.LatLng(35.8453, 129.286),
        new naver.maps.LatLng(35.8447, 129.2868),
        new naver.maps.LatLng(35.8432, 129.2879),
        new naver.maps.LatLng(35.8423, 129.2884),
        new naver.maps.LatLng(35.8418, 129.2885),
        new naver.maps.LatLng(35.8411, 129.2883),
        new naver.maps.LatLng(35.8376, 129.2852),
        new naver.maps.LatLng(35.8374, 129.285),
        new naver.maps.LatLng(35.8371, 129.2847),
        new naver.maps.LatLng(35.8366, 129.2844),
        new naver.maps.LatLng(35.8362, 129.2843),
        new naver.maps.LatLng(35.8358, 129.2842),
     
        new naver.maps.LatLng(35.8355, 129.2842),
        new naver.maps.LatLng(35.8352, 129.2843),
        new naver.maps.LatLng(35.8349, 129.2843),
       
        new naver.maps.LatLng(35.8363, 129.2821)
    ]
});











/*var infowindow = new naver.maps.InfoWindow({
	content: contentString
});


var HOME_PATH = window.HOME_PATH || '.';

var gjw = new naver.maps.LatLng(35.8363, 129.2821),
    map3 = new naver.maps.Map('map3', {
        center: gjw.destinationPoint(0, 500),
        zoom: 13
    }),
    marker = new naver.maps.Marker({
        map: map3,
        position: gjw
    });

var contentString = [
        '<div class="iw_inner">',
        '   <h3>경주월드</h3>',
        '   <p>경상북도 경주시 천군동 191-5 | 보문로 554(우) 38117<br />',
        '       <br />',
        '       1544-8765 | #테마파크, #놀이동산<br />',
        '       <a href="http://localhost:8000" target="_blank">https://www.gjw.co.kr/</a>',
        '   </p>',
        '</div>'
    ].join('');

var infowindow = new naver.maps.InfoWindow({
    content: contentString
});

naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map3, marker);
    }
});

infowindow.open(map3, marker);
infowindow.close(map, marker);
var polyline3 = new naver.maps.Polyline({
    map: map3,
    path: [
        new naver.maps.LatLng(35.8403, 129.2014),
        new naver.maps.LatLng(35.8383, 129.2024),
        new naver.maps.LatLng(35.839, 129.2071),
        new naver.maps.LatLng(35.8445, 129.2073),
        new naver.maps.LatLng(35.8441, 129.2169),
        new naver.maps.LatLng(35.8358, 129.2219),
        new naver.maps.LatLng(35.8402, 129.2227),
        new naver.maps.LatLng(35.84, 129.2321),
        new naver.maps.LatLng(35.842, 129.2336),
        new naver.maps.LatLng(35.8395, 129.2439),
        new naver.maps.LatLng(35.8463, 129.2582),
        new naver.maps.LatLng(35.8509, 129.2626),
        new naver.maps.LatLng(35.8532, 129.2681),
        new naver.maps.LatLng(35.8589, 129.2715),
        new naver.maps.LatLng(35.8538, 129.279),
        new naver.maps.LatLng(35.8498, 129.2785),
        new naver.maps.LatLng(35.8381, 129.2858),
        new naver.maps.LatLng(35.8347, 129.2843),
        new naver.maps.LatLng(35.8363, 129.2821)
    ]
});









var infowindow = new naver.maps.InfoWindow({
	content: contentString
});


var HOME_PATH = window.HOME_PATH || '.';

var gjw = new naver.maps.LatLng(35.8363, 129.2821),
    map4 = new naver.maps.Map('map4', {
        center: gjw.destinationPoint(0, 500),
        zoom: 13
    }),
    marker = new naver.maps.Marker({
        map: map4,
        position: gjw
    });

var contentString = [
        '<div class="iw_inner">',
        '   <h3>경주월드</h3>',
        '   <p>경상북도 경주시 천군동 191-5 | 보문로 554(우) 38117<br />',
        '       <br />',
        '       1544-8765 | #테마파크, #놀이동산<br />',
        '       <a href="http://localhost:8000" target="_blank">https://www.gjw.co.kr/</a>',
        '   </p>',
        '</div>'
    ].join('');

var infowindow = new naver.maps.InfoWindow({
    content: contentString
});

naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map4, marker);
    }
});

infowindow.open(map4, marker);
infowindow.close(map4, marker);
var polyline4 = new naver.maps.Polyline({
    map: map,
    path: [
        new naver.maps.LatLng(35.8403, 129.2014),
        new naver.maps.LatLng(35.8383, 129.2024),
        new naver.maps.LatLng(35.839, 129.2071),
        new naver.maps.LatLng(35.8445, 129.2073),
        new naver.maps.LatLng(35.8441, 129.2169),
        new naver.maps.LatLng(35.8358, 129.2219),
        new naver.maps.LatLng(35.8402, 129.2227),
        new naver.maps.LatLng(35.84, 129.2321),
        new naver.maps.LatLng(35.842, 129.2336),
        new naver.maps.LatLng(35.8395, 129.2439),
        new naver.maps.LatLng(35.8463, 129.2582),
        new naver.maps.LatLng(35.8509, 129.2626),
        new naver.maps.LatLng(35.8532, 129.2681),
        new naver.maps.LatLng(35.8589, 129.2715),
        new naver.maps.LatLng(35.8538, 129.279),
        new naver.maps.LatLng(35.8498, 129.2785),
        new naver.maps.LatLng(35.8381, 129.2858),
        new naver.maps.LatLng(35.8347, 129.2843),
        new naver.maps.LatLng(35.8363, 129.2821)
    ]
});












var infowindow = new naver.maps.InfoWindow({
	content: contentString
});


var HOME_PATH = window.HOME_PATH || '.';

var gjw = new naver.maps.LatLng(35.8363, 129.2821),
    map5 = new naver.maps.Map('map5', {
        center: gjw.destinationPoint(0, 500),
        zoom: 13
    }),
    marker = new naver.maps.Marker({
        map: map5,
        position: gjw
    });

var contentString = [
        '<div class="iw_inner">',
        '   <h3>경주월드</h3>',
        '   <p>경상북도 경주시 천군동 191-5 | 보문로 554(우) 38117<br />',
        '       <br />',
        '       1544-8765 | #테마파크, #놀이동산<br />',
        '       <a href="http://localhost:8000" target="_blank">https://www.gjw.co.kr/</a>',
        '   </p>',
        '</div>'
    ].join('');

var infowindow = new naver.maps.InfoWindow({
    content: contentString
});

naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map5, marker);
    }
});

infowindow.open(map5, marker);
infowindow.close(map5, marker);
var polyline5 = new naver.maps.Polyline({
    map: map5,
    path: [
        new naver.maps.LatLng(35.8403, 129.2014),
        new naver.maps.LatLng(35.8383, 129.2024),
        new naver.maps.LatLng(35.839, 129.2071),
        new naver.maps.LatLng(35.8445, 129.2073),
        new naver.maps.LatLng(35.8441, 129.2169),
        new naver.maps.LatLng(35.8358, 129.2219),
        new naver.maps.LatLng(35.8402, 129.2227),
        new naver.maps.LatLng(35.84, 129.2321),
        new naver.maps.LatLng(35.842, 129.2336),
        new naver.maps.LatLng(35.8395, 129.2439),
        new naver.maps.LatLng(35.8463, 129.2582),
        new naver.maps.LatLng(35.8509, 129.2626),
        new naver.maps.LatLng(35.8532, 129.2681),
        new naver.maps.LatLng(35.8589, 129.2715),
        new naver.maps.LatLng(35.8538, 129.279),
        new naver.maps.LatLng(35.8498, 129.2785),
        new naver.maps.LatLng(35.8381, 129.2858),
        new naver.maps.LatLng(35.8347, 129.2843),
        new naver.maps.LatLng(35.8363, 129.2821)
    ]
});



*/