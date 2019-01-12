
// Эти данные  исключительно для данного приложения (для UI дизайн-системы)


export const title = 'ResourceTabs';

export const importString = `
  import { ResourceTabs } from 'components/gkh-components/ResourceTabs/ResourceTabs')
`;

export const description = `
    Табы с названиями показателей счетчиков
`;

export const code = `
  <div class="gkhTemplates__container___aTafn">
    <div class="ResourceTabs__gkhTabs___9D76g">
      <div class="ResourceTabs__tab___14cMa ResourceTabs__gas___1q5lu">
        <div class="ResourceTabs__icon___29ds7"></div>
        <div>Газ</div>
      </div>
      <div class="ResourceTabs__tab___14cMa ResourceTabs__heat___sUaUY ResourceTabs__active___3l42o">
        <div class="ResourceTabs__icon___29ds7"></div>
        <div>Тепло</div>
      </div>
      <div class="ResourceTabs__tab___14cMa ResourceTabs__pureWater___1aeI3">
        <div class="ResourceTabs__icon___29ds7"></div>
        <div>Чистая вода</div>
      </div> 
      <div class="ResourceTabs__tab___14cMa ResourceTabs__hotWater___2XeQN">
        <div class="ResourceTabs__icon___29ds7"></div>
        <div>Горячая вода</div>
      </div>
      <div class="ResourceTabs__tab___14cMa ResourceTabs__coldWater___s7Cfj">
        <div class="ResourceTabs__icon___29ds7"></div>
        <div>Холодная вода</div>
      </div>
      <div class="ResourceTabs__tab___14cMa ResourceTabs__electricity___EEhvK">
        <div class="ResourceTabs__icon___29ds7"></div>
        <div>Электричество</div>
      </div>
    </div>
  </div>
`;


export const props = {
  tabsArr: {
    type: 'array',
    description: 'Данные для отрисовки компонента, полученные с сервера'
  },
  active: {
    type: 'string',
    description: 'Текущий активный элемент',
    default: 'Тепло'
  }
};

