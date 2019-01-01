import {Message} from 'element-ui'

export const isNotNullORBlank = (...args)=> {
  for (var i = 0; i < args.length; i++) {
    var argument = args[i];
    if (argument == null || argument == '' || argument == undefined) {
      Message.warning({message: '数据不能为空!'})
      return false;
    }
  }
  return true;
}

export const initMenu = (router, store)=> {
  if (store.state.routes.length > 0) {
    return;
  }

  // [{"id":2,"path":"/home","component":"Home","name":"员工资料","iconCls":"fa fa-user-circle-o","children":[{"id":null,"path":"/emp/basic","component":"EmpBasic","name":"基本资料","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}}],"meta":{"keepAlive":false,"requireAuth":true}},{"id":3,"path":"/home","component":"Home","name":"人事管理","iconCls":"fa fa-address-card-o","children":[{"id":null,"path":"/per/ec","component":"PerEc","name":"员工奖惩","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/per/train","component":"PerTrain","name":"员工培训","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/per/salary","component":"PerSalary","name":"员工调薪","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/per/mv","component":"PerMv","name":"员工调动","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}}],"meta":{"keepAlive":false,"requireAuth":true}},{"id":4,"path":"/home","component":"Home","name":"薪资管理","iconCls":"fa fa-money","children":[{"id":null,"path":"/sal/sob","component":"SalSob","name":"工资账套管理","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sal/sobcfg","component":"SalSobCfg","name":"员工账套设置","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sal/table","component":"SalTable","name":"工资表管理","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sal/month","component":"SalMonth","name":"月末处理","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sal/search","component":"SalSearch","name":"工资表查询","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}}],"meta":{"keepAlive":false,"requireAuth":true}},{"id":5,"path":"/home","component":"Home","name":"统计管理","iconCls":"fa fa-bar-chart","children":[{"id":null,"path":"/sta/all","component":"StaAll","name":"综合信息统计","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sta/score","component":"StaScore","name":"员工积分统计","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sta/pers","component":"StaPers","name":"人事信息统计","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sta/record","component":"StaRecord","name":"人事记录统计","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}}],"meta":{"keepAlive":false,"requireAuth":true}},{"id":6,"path":"/home","component":"Home","name":"系统管理","iconCls":"fa fa-windows","children":[{"id":null,"path":"/sys/basic","component":"SysBasic","name":"基础信息设置","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sys/cfg","component":"SysCfg","name":"系统管理","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sys/log","component":"SysLog","name":"操作日志管理","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sys/hr","component":"SysHr","name":"操作员管理","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sys/data","component":"SysData","name":"备份恢复数据库","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sys/init","component":"SysInit","name":"初始化数据库","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}}],"meta":{"keepAlive":false,"requireAuth":true}}]
      var fmtRoutes =formatRoutes([{"id":2,"path":"/home","component":"Home","name":"员工资料","iconCls":"el-icon-document","children":[{"id":null,"path":"/material/basic","component":"MatBasic","name":"基本资料","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}}],"meta":{"keepAlive":false,"requireAuth":true}},
        {"id":3,"path":"/home","component":"Home","name":"人事管理","iconCls":"fa fa-address-card-o","children":[{"id":null,"path":"/per/ec","component":"PerEc","name":"员工奖惩","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/per/train","component":"PerTrain","name":"员工培训","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/per/salary","component":"PerSalary","name":"员工调薪","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/per/mv","component":"PerMv","name":"员工调动","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}}],"meta":{"keepAlive":false,"requireAuth":true}},{"id":4,"path":"/home","component":"Home","name":"薪资管理","iconCls":"fa fa-money","children":[{"id":null,"path":"/sal/sob","component":"SalSob","name":"工资账套管理","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sal/sobcfg","component":"SalSobCfg","name":"员工账套设置","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sal/table","component":"SalTable","name":"工资表管理","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sal/month","component":"SalMonth","name":"月末处理","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sal/search","component":"SalSearch","name":"工资表查询","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}}],"meta":{"keepAlive":false,"requireAuth":true}},{"id":5,"path":"/home","component":"Home","name":"统计管理","iconCls":"fa fa-bar-chart","children":[{"id":null,"path":"/sta/all","component":"StaAll","name":"综合信息统计","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sta/score","component":"StaScore","name":"员工积分统计","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sta/pers","component":"StaPers","name":"人事信息统计","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sta/record","component":"StaRecord","name":"人事记录统计","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}}],"meta":{"keepAlive":false,"requireAuth":true}},{"id":6,"path":"/home","component":"Home","name":"系统管理","iconCls":"fa fa-windows","children":[{"id":null,"path":"/sys/basic","component":"SysBasic","name":"基础信息设置","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sys/cfg","component":"SysCfg","name":"系统管理","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sys/log","component":"SysLog","name":"操作日志管理","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sys/hr","component":"SysHr","name":"操作员管理","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sys/data","component":"SysData","name":"备份恢复数据库","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}},{"id":null,"path":"/sys/init","component":"SysInit","name":"初始化数据库","iconCls":null,"children":[],"meta":{"keepAlive":false,"requireAuth":true}}],"meta":{"keepAlive":false,"requireAuth":true}}]);
      router.addRoutes(fmtRoutes);
      store.commit('initMenu', fmtRoutes);
    }

export const formatRoutes = (routes)=> {
  let fmRoutes = [];
  routes.forEach(router=> {
    let {
      path,
      component,
      name,
      meta,
      iconCls,
      children
    } = router;
    if (children && children instanceof Array) {
      children = formatRoutes(children);
    }
    let fmRouter = {
      path: path,
      component(resolve){
        if (component.startsWith("Home")) {
          require(['../components/' + component + '.vue'], resolve)
        } else if (component.startsWith("Mat")) {
          require(['../components/material/' + component + '.vue'], resolve)
        }else if (component.startsWith("Sys")) {
          require(['../components/system/' + component + '.vue'], resolve)
        }
      },
      name: name,
      iconCls: iconCls,
      meta: meta,
      children: children
    };
    fmRoutes.push(fmRouter);
  })
  return fmRoutes;
}
