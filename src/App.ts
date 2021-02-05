/**
 * Created by Lester on 2020/12/19
 */

import 'src/App.css';
import Avatar from 'src/assets/images/avatar.png';
import Index from 'src/pages/Index/Index';

const name: string = 'Lester Long';

interface Route {
    name?: string;
    path: string;
    component: string;
}

const routes: Route[] = [{
    path: "/index",
    component: '<a class="index-wrap" href="#/detail">首页</a>'
}, {
    path: "/detail",
    component: '<a class="detail-wrap" href="#/index">详情</a>'
}];

/**
 * hash值改变时候处理
 */
const handleHashChange = (e: HashChangeEvent|any) => {
    console.log(e);
    const { hash } = window.location;
    const path: string = ((hash as any).match(/(\/[\w\/]+)(\?|$=?)/) || [])[1];
    console.log(window.location.hash, path);
    (document.querySelector('.route-view') as any).innerHTML =
        (routes.find((route: Route) => route.path === path) || routes[0]).component;
};

/*window.addEventListener("hashchange", handleHashChange);
window.addEventListener('load', handleHashChange);*/

/*const handlePopState = () => {
    const { pathname } = window.location;
    console.log(pathname);
    const ele: HTMLElement|null = document.querySelector('.route-view');
    if (ele) {
        ele.innerHTML = (routes.find((route: Route) => pathname.includes(route.path)) || routes[0]).component;
    }
};


window.addEventListener("popstate", handlePopState);
window.addEventListener('load', function () {
    handlePopState();
    document.querySelector('.route-view')?.addEventListener("click", (e:Event) => {
        e.preventDefault();
        // @ts-ignore
        window.history.pushState(null, '', e.target.getAttribute("href"));
        handlePopState();
    });
});*/

const render = () => {
  return (
      '<div class="wrap">' +
            `<div class="title">Hello ${name} 夕宿君兮</div>` +
            `<div class="route-view"></div>` +
            // `<img class="img" src="${Avatar}" alt=""/>` +
      '</div>'
  )
};

export default (render() + Index);
