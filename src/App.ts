/**
 * Created by Lester on 2020/12/19
 */

import 'src/App.css';
import Avatar from 'src/assets/images/avatar.png';
import Index from 'src/pages/Index/Index';

const name: string = 'Lester Long';

const render = () => {
  return (
      '<div class="wrap">' +
            `<div class="title">Hello ${name} 夕宿君兮</div>` +
            `<div class="name">Hello ${name} 夕宿君兮2</div>` +
            `<img class="img" src="${Avatar}" alt=""/>` +
      '</div>'
  )
};

export default (render() + Index);
