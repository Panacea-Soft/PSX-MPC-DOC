import psxdoc from '../../assets/psxmpc.json';
import HomeView from '../../views/HomeView.vue';
// import route from '../../assets/routes.json';

const routes = [
    {
        path: '/',
        // redirect: '/',
    }
];

// let num = 0;
function getRouteFromJson(routes, json, component, link = null) {
    let route = {};
    for (let i = 0; i < json.length; i++) {
        let routeLink = '';
        let jsonTitle = json[i].alias.split(' ').join('-').toLowerCase();
        
        if (link == null) {
            routeLink = `${jsonTitle}`;
        }
        else if(link == "/"){
            routeLink = `/${jsonTitle}`;
        }
        else {
            routeLink = `${link}/${jsonTitle}`;
        }

        route = {
            path: `${jsonTitle}`,
            component: component,
            props: true,
            meta: {
                image: json[i].image != "" ? json[i].image : "",
                icon: json[i].icon != "" ? json[i].icon : "",
                appLink: routeLink,
                link: json[i].link,
                alias: json[i].alias,
                title: json[i].title,
            }
        }
        if (json[i].hasOwnProperty('childs')) {
            routes.push(route);
            getRouteFromJson(route['children'] = [], json[i].childs, component, `${route.meta.appLink}`);
        }
        else {
            routes.push(route);
        }
    }
}

getRouteFromJson(routes, [psxdoc], HomeView);

// console.log(routes);
// routes[1].path = 
// console.log(routes[1].children[0].path.replace(/[0-9{()}]/g,''));
// console.log(routes);

export default routes;
