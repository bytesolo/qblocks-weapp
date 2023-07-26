// components/qblocks/togglebutton-group/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: Array,
      value: [],
      observer: 'updateChildren'
    },
    multiple: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    children: []
  },
  relations: {
    '../toggle/index': {
      type: 'child', // 子组件的关联类型，即是子组件
      // 子组件关联时触发
      linked(target) {
        if (this.data.value.indexOf(target.data.name) > -1) {
          target.setData({
            selected: true
          });
        }
        // console.log('Linked to child component', target);
      },
      unlinked(target) {
        // 子组件取消关联时触发
        console.log('Unlinked from child component', target);
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // onChildrenChanged(event){
    //   this.onChange(event);
    // },
    updateChildren(newVal, oldVal) {
      // console.log(this.data.multiple)
      // console.log('updateChildren', newVal, oldVal);

      this.data.children.forEach((child) => {
        if (newVal.indexOf(child.data.name) > -1) {
          child.setData({
            selected: true
          });
        }
      });
    },
    onChildChange(child) {
      // console.log('onChildChange', child);
      if (!this.data.multiple) {
        // 非多选状态下unselect除当前标签以外的其他标签
        this.data.children.forEach((c) => {
          if (c != child) {
            c.setData({
              selected: false
            });
          }
        });
      }
      this.syncChildren();
      this.triggerEvent("change", {
        value: this.data.value
      });
      // const name = event.detail.name;
      // console.log(event);
      // this.data.radios.forEach((item) => {
      //   item.checked = item.name === name;
      // });
      // this.setData({
      //   radios: this.data.radios
      // });
      // this.triggerEvent('change', {
      //   value: name
      // });
    },
    syncChildSelected() {
      console.log('syncChildSelected');
    },
    // 同步数据和组件
    syncChildren() {
      const children = this.getRelationNodes('../toggle/index');
      const value = [];
      children.forEach((child) => {
        if (child.data.selected) {
          value.push(child.data.name);
        }
      });
      this.setData({
        children,
        value
      });
      // console.log('syncChildren', children, value)
    },
    initChildren() {
      const children = this.getRelationNodes('../toggle/index');
      this.setData({
        children
      });
      // console.log('initChildren', children)
    },
    updateRadios() {
      const children = this.getRelationNodes('../toggle/index');
      const value = this.data.value;
      const radios = [];
      children.forEach((child) => {
        const checked = child.data.name === value;
        radios.push({
          name: child.data.name,
          label: child.data.label,
          checked
        });
      });
      this.setData({
        children
      });
      console.log(this.data);
    }
  },
  lifetimes: {
    attached() {
      // console.log('attached')
      // 组件初始化时绑定事件
    },
    detached() {},
    ready() {
      // console.log('ready', this.data)
      this.initChildren();
      // console.log('ready')
      // this.updateRadios();
    },
  }
})