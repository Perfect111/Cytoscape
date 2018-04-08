///if data come from database, style and data and source is simple, I can make this json file.

var xobj = new XMLHttpRequest();
var mypopcode,mystyle;
var cy={};
xobj.open('GET', "data.json", true);
xobj.onreadystatechange = function () {
 if(xobj.readyState == 4 && xobj.status == 200) {
  mypopcode = JSON.parse(xobj.responseText);
  console.log(mypopcode);
  //

  var xobj1 = new XMLHttpRequest();
  xobj1.open('GET', "style.json", true);
  xobj1.onreadystatechange = function () {
   if(xobj1.readyState == 4 && xobj1.status == 200) {
    mystyle = JSON.parse(xobj1.responseText);
    //
    // console.log(mystyle);
    popcodegraph(mypopcode,0,0);    
    // console.log(mypopcode);
   }
  };
  xobj1.send(null);

 }
};
xobj.send(null);

//

function popcodegraph(popcode,deep,iid){

  // console.log(popcode);
  
  var first_circle_position = {x : 0, y : 100};
  var first_tree_position = {x : 120, y : 80};
  var line_last_id = 'line16';

  ///these data is based database.....///
  if (deep == 0){
    var name3 = popcode[deep].month + ' ' + popcode[deep].day + ' ' + popcode[deep].time;
    // in this way
    var name2 = 'Nov 28 18:00 PM';
    var name1 = 'Nov 29 1:23 PM';
    var name4 = 'Nov 27 0:23 PM';
    var name5 = 'Nov 27 6:23 AM';
    var name6 = 'Oct 26 11:30 PM';
    var name7 = 'Oct 26 10:10 PM';
    var name8 = '... ... ...more';
    var name9 = 'Nov 25 10:9 AM';
    var name10 = 'Nov 24 10:9 AM';
    var name11 = 'Nov 23 10:9 AM';
  }else{
    
    var name3 = popcode[iid].month + ' ' + popcode[iid].day + ' ' + popcode[iid].time;
    //in this way
    var name2 = 'Nov 28 18:00 PM';
    var name1 = 'Nov 27 1:23 PM';
    var name4 = 'Nov 27 0:23 PM';
    var name5 = 'Nov 27 6:23 AM';
    var name6 = 'Oct 26 11:30 PM';
    var name7 = 'Oct 26 10:10 PM';
    var name8 = '... ... ...more';
    var name9 = 'Nov 25 10:9 AM';
    var name10 = 'Nov 24 10:9 AM';
    var name11 = 'Nov 23 10:9 AM';
  }
  // var name3 = popcode[deep].;
  // var name2 = 'Nov 28 18:00 PM';
  // var name1 = 'Nov 27 1:23 PM';
  // var name4 = 'Nov 27 0:23 PM';
  // var name5 = 'Nov 27 6:23 AM';
  // var name6 = 'Oct 26 11:30 PM';
  // var name7 = 'Oct 26 10:10 PM';
  // var name8 = '... ... ...more';
  // var name9 = 'Nov 25 10:9 AM'
  // var name10 = 'Nov 24 10:9 AM'
  // var name11 = 'Nov 23 10:9 AM'
  ////

  ///first group's nameset
  var frist_nameset = [name1,name2,name3,name4,name5,name6,name7,name8,name9,name10,name11];

  var first_array =[];

  cy  = cytoscape({
    container: document.getElementById('cy'),

    layout: {
      name: 'preset',
    },
    style: mystyle,

    elements: {
      nodes: [

        { data: { id: 'e', name:popcode[iid].owner}, position: { x: first_circle_position.x + 50, y: first_circle_position.y - 50  }  },
        { data: { id: 'g' }, position: { x: first_circle_position.x + 100, y: first_circle_position.y }  },
        { data: { id: 'k', name: 'FFB' }, position: { x: first_circle_position.x + 50, y: first_circle_position.y + 50}  },
        { data: { id: 'bluecircle',parent:'j' }, classes:'.bluecircle' ,position: { x: first_circle_position.x, y: first_circle_position.y } ,selected:false, selectable : true,locked:false },
        { data: { id: 'redbutton',parent:'j' }, classes:'.redbutton' ,position: { x: first_circle_position.x - 5, y: first_circle_position.y - 8} ,selected:false, selectable : true,locked:false },
        { data: { id: 'greenbutton',parent:'j' }, classes:'.greenbutton' ,position: { x: first_circle_position.x, y: first_circle_position.y + 10 } ,selected:false, selectable : true,locked:false },
        { data: { id: 'line1'}, position: { x: first_tree_position.x, y:first_tree_position.y }  },
        { data: { id: 'line2', },class:'.line2' , group:"nodes" , position: { x: first_tree_position.x + 100, y: first_tree_position.y }  },
        { data: { id: 'line2-line', parent:'line2', class:'.line2-line' ,name:frist_nameset[0]}, position: { x: first_tree_position.x + 100, y: first_tree_position.y }  },
        { data: { id: 'line3'},position: { x: first_tree_position.x, y:first_tree_position.y + 20 }  },
        { data: { id: 'line4'}, class:'.line4' ,position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 }  },
        { data: { id: 'line4-line', parent:'line4',name:frist_nameset[1]}, class:'.line4-line' , position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 }  },
        { data: { id: 'line5'},position: { x: first_tree_position.x, y: first_tree_position.y + 20 * 2 }  },
        { data: { id: 'line6'},class:'.line6',position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 * 2 }  },
        { data: { id: 'line6-line', parent:'line6',name:frist_nameset[2]}, class:'.line6-line' ,position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 * 2 }  },
        { data: { id: 'line7'},position: { x: first_tree_position.x, y: first_tree_position.y + 20 * 3 }  },
        { data: { id: 'line8'},class:'.line8',position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 * 3 }  },
        { data: { id: 'line8-line', parent:'line8',name:frist_nameset[3]},class:'.line8-line' , position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 * 3 }  },
        { data: { id: 'line9'},position: { x: first_tree_position.x, y: first_tree_position.y + 20 * 4 }  },
        { data: { id: 'line10'},class:'.line10',position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 * 4 }  },
        { data: { id: 'line10-line', parent:'line10',name:frist_nameset[4]}, class:'.line10-line' ,position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 * 4 }  },
        { data: { id: 'line11'},position: { x: first_tree_position.x, y: first_tree_position.y + 20 * 5 }  },
        { data: { id: 'line12' },class:'.line12',position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 * 5 }  },
        { data: { id: 'line12-line', parent:'line12',name:frist_nameset[5] }, class:'.line12-line' ,position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 * 5 }  },
        { data: { id: 'line13'},position: { x: first_tree_position.x, y: first_tree_position.y + 20 * 6 }  },
        { data: { id: 'line14'},class:'.line14',position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 * 6 }  },
        { data: { id: 'line14-line', parent:'line14',name:frist_nameset[6]}, class:'.line14-line' ,position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 * 6 }  },
        { data: { id: 'line15' },position: { x: first_tree_position.x, y: first_tree_position.y + 20 * 7 }  },
        { data: { id: 'line16'},class:'.line16',position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 * 7 }  },
        { data: { id: 'more', parent:'line16',name:frist_nameset[7]}, class:'.more' ,position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 * 7 }  },
      
      ],
      edges: [

        { data: { source: 'e', target: 'bluecircle' } },
        { data: { source: 'k', target: 'bluecircle' } },
        { data: { source: 'g', target: 'bluecircle' } },
        { data: { source: 'line1',target:'line2'}},
        { data: { source: 'line3',target:'line4'}},
        { data: { source: 'line5',target:'line6'}},
        { data: { source: 'line7',target:'line8'}},
        { data: { source: 'line9',target:'line10'}},
        { data: { source: 'line11',target:'line12'}},
        { data: { source: 'line13',target:'line14'}},
        { data: { source: 'line15',target:'line16'}},
        { data: { source: 'line1',target:'line15'}}

      ]
    }
  });
  // 

  var selected_flag = false;
  /// here starts add one group
  cy.on('tap', 'node', function (evt) {

    
  // relative variable is the related child and parent.
  
  var add_number;
  
  /// user can select 
  
  if (selected_flag==false){
  // more is clicked by user
    if (evt.target.id() == 'more'){
      // console.log('===selected more ===');
      // relativex = evt.target.position().x; 
      // relativey = evt.target.position().y;
      // add_number = frist_nameset.length - 8;
      console.log("add_number===" +  add_number); 
      // // 'more' line is delete
      // // cy.
      // cy.remove( cy.$("#more") );
      // for ()
      // cy_add(add_number);
    }
    if (iid == 0){
      if (evt.target.id() == 'redbutton'){
        // console.log('===redbutton clicked===');
        if (deep != 0){
          deep--;
          // popcodegraph(popcode,deep);
        }
        
      }
      // console.log(evt.target.position());
      if (evt.target.id() == 'greenbutton'){
        deep++;
        if (popcode[iid].downstream.length>1){
          selected_flag = true;
          for (i=0;i<popcode[iid].downstream.length;i++){
            // console.log(evt.target.position().y);
            var zero_circle = {x: evt.target.position().x + 300, y: evt.target.position().y +220*(i-1) + 150};
            var zero_line = {x: evt.target.position().x + 420, y: evt.target.position().y + 220*(i-1) + 130};
            // console.log(popcode[iid].downstream[i].id);
            add_new_group(popcode[iid].downstream[i].id,zero_circle,zero_line);
            //popcode[iid].wdownstream[i].id
            // cy.on('tap', 'node', function (evt) {
              // console.log(evt.target.id())
              if (evt.target.id() == 'bluecircle1'){
                // console.log("======")
                  
              }
            // });  
          }
        }else{
          var zero_circle = {x: evt.target.position().x + 300, y: evt.target.position().y +220*(-1) + 150};
          var zero_line = {x: evt.target.position().x + 420, y: evt.target.position().y + 220*(-1) + 130};
          // console.log(popcode[iid].downstream[i].id);
          add_new_group(popcode[iid].downstream[i].id,zero_circle,zero_line);
          delete_old_group(popcode[iid].id);
        } 
        deep++;
      }
      // console.log(deep);
      // console.log('===greenbutton clicked===');
      var zoom = 1.6;
      cy.zoom({
        level:zoom,
        renderedPosition:{x:100,y:260}
      });
    }else{
      // console.log("======" + iid);
      // console.log("red" + evt.target.id());
      if (evt.target.id() == 'redbutton' + iid){
        // console.log('===redbutton clicked===' + deep);
        if (deep != 0){
          deep--;
          // console.log('======' + deep);
          var zero_circle = {x: evt.target.position().x - 300, y: evt.target.position().y};
          var zero_line = {x: evt.target.position().x - 180, y: evt.target.position().y};
          if (popcode[iid].upstream.id == 0){
            add_new_group('',zero_circle,zero_line);
            delete_old_group(popcode[iid].id);
            iid = popcode[iid].upstream.id;
            iid = 0;          
          }else{
            add_new_group(popcode[iid].upstream.id,zero_circle,zero_line);
            delete_old_group(popcode[iid].id);
            iid = popcode[iid].upstream.id;
            // iid = 0;          
          }

          // popcodegraph(popcode,deep);
        }else{

          
        }
      }
      // console.log(evt.target.position());
      if (evt.target.id() == 'greenbutton' + iid){
        // console.log(popcode[iid].downstream.length);      
        deep++;
        if (popcode[iid].downstream.length>1) {
          selected_flag = true;
          for (i=0;i<popcode[iid].downstream.length;i++){
            // console.log(evt.target.position().y);
            var zero_circle = {x: evt.target.position().x + 300, y: evt.target.position().y +220*(i-1) + 150};
            var zero_line = {x: evt.target.position().x + 420, y: evt.target.position().y + 220*(i-1) + 130};
            // console.log(popcode[iid].downstream[i].id);
            add_new_group(popcode[iid].downstream[i].id,zero_circle,zero_line);
            // iid = popcode[iid].downstream[i].id;
            //popcode[iid].wdownstream[i].id
            // cy.on('tap', 'node', function (evt) {
              // console.log(evt.target.id())
              // if (evt.target.id() == 'bluecircle1'){
              //   console.log("======")
                  
              // }
            // });  
          }
        }
        else
        {
          var zero_circle = {x: evt.target.position().x + 300, y: evt.target.position().y +220*(-1) + 150};
          var zero_line = {x: evt.target.position().x + 420, y: evt.target.position().y + 220*(-1) + 130};
          // console.log(popcode[iid].downstream[i].id);
          add_new_group(popcode[iid].downstream.id,zero_circle,zero_line);
          delete_old_group(popcode[iid].id);
          iid = popcode[iid].downstream.id;
        }
      }
      deep++;
      // console.log(deep);
      // console.log('===greenbutton clicked===');
      var zoom = 1.6;
      cy.zoom({
        level:zoom,
        renderedPosition:{x:100,y:260}
      });
    }
  }
  else{
    
    if (popcode[iid].downstream.length == 1){
      var temp = 0
      if (temp != 0){
        for (i=1;i<popcode.length+1;i++){
          if (i==popcode[iid].downstream[0].id){
            iid = i;
          }
          else{
            console.log("===="+i);
            console.log(iid);
            cy.remove( cy.$("#bluecircle"+ i) );
            cy.remove( cy.$("#redbutton" + i) );
            cy.remove( cy.$("#greenbutton" + i) );
            cy.remove( cy.$("#e" + i) );
            cy.remove( cy.$("#k" + i) );
            cy.remove( cy.$("#g" + i) );
            for (j=1;j<17;j++){
              cy.remove( cy.$("#"+i+"line"+j) );
            }
          }
        }
        selected_flag = false;
        // add_new_group('',first_circle_position,first_tree_position);
      }
    
    }else{
      var temp = 0
      for (i=1;i<popcode.length + 1;i++){
        if (evt.target.id() == "bluecircle" + i){
          // console.log(id);
          // delete_old_group('');
          cy.remove( cy.$("#bluecircle") );
          cy.remove( cy.$("#redbutton") );
          cy.remove( cy.$("#greenbutton") );
          cy.remove( cy.$("#e") );
          cy.remove( cy.$("#k") );
          cy.remove( cy.$("#g") );
          temp = i;
          for (j=1;j<17;j++){
            cy.remove( cy.$("#line" + j) );
          }
        } 
      }
      if (temp != 0){
        for (i=1;i<popcode.length+1;i++){
          if (i==temp){
            iid = i;
          }
          else{
            // console.log("===="+i);
            // console.log(iid);
            delete_old_group(i);
            // cy.remove( cy.$("#bluecircle"+ i) );
            // cy.remove( cy.$("#redbutton" + i) );
            // cy.remove( cy.$("#greenbutton" + i) );
            // cy.remove( cy.$("#e" + i) );
            // cy.remove( cy.$("#k" + i) );
            // cy.remove( cy.$("#g" + i) );
            // for (j=1;j<17;j++){
            //   cy.remove( cy.$("#"+i+"line"+j) );
            // }
          }
        }
        selected_flag = false;
        // add_new_group('',first_circle_position,first_tree_position);
      }
    }
    
    // popcode[iid].downstream.length
          
  }


      // cy.automove({
      //   nodesMatching: cy.$('#bluecircle2 ,#redbutton2,#greenbutton2'),
      //   reposition: 'drag',
      //   dragWith: cy.$('#bluecircle2,#redbutton2,#greenbutton2')
      // });
      // cy.on('cxttap', 'node', function( evt ){
      //   var tgt = evt.target || evt.cyTarget; // 3.x || 2.x
    
      //   tgt.remove();
      // });

  });
  
  cy.automove({
    nodesMatching: cy.$('#bluecircle,#redbutton,#greenbutton, #e, #g, #k,#more,#line2-line,#line4-line,#line6-line,#line8-line,#line10-line,#line12-line,#line14-line,#line1,#line3,#line5,#line7,#line9,#line11,#line13,#line15'),
    reposition: 'drag',
    dragWith: cy.$('#bluecircle,#redbutton,#greenbutton, #e, #g, #k,#more,#line2-line,#line4-line,#line6-line,#line8-line,#line10-line,#line12-line,#line14-line,#line1,#line3,#line5,#line7,#line9,#line11,#line13,#line15')
  });

  cy.fit( 100 ); // fit to all the layouts

  cy.on('cxttap', 'node', function( evt ){
    var tgt = evt.target || evt.cyTarget; // 3.x || 2.x

    tgt.remove();
  });
  
  cy.nodes().forEach(function(n){
    var g = n.data('name');
    // console.log("++++n++++");
    // console.log(n.id());
    for (i=0;i<frist_nameset.length;i++){
      var temp = 'line' + (i+1)*2 + '-line';
      if (temp == n.id()){
        n.qtip({
          content:frist_nameset[i],
          position: {
            my: 'left center',
            at: 'right center'
          },
          style: {
            classes: 'qtip-bootstrap',
            tip: {
              width: 16,
              height: 8
            }
          }
        });
      }
    }
  });

// function cy_add(number){
//   for (var i = 0;i < number ; i++){
//     var add_line_id = parseInt(line_last_id) + i;
//     if (i==0){
//       cy.add([
//         {group: "nodes",  data: { id: 'more', parent : 'line16' ,  name: frist_nameset[8]},position: { x: relativex, y: relativey + 20 * i}  }
//       ]);
//     }
//     // else{
//     //   cy.add([
//     //     {group: "nodes", style : {selector:'node',css:{'content':'data(name)','background-color':'white','width':'0.1','height':'0.1'}}, data: { id: add_line_id ,  name: frist_nameset[8 + number]},position: { x: relativex, y: relativey + 20 * i }}
//     //     // {
//     //     //   group:"nodes",
//     //     //    data: { id: 'line13'},position: { x: first_tree_position.x, y: first_tree_position.y + 20 * 6 }  },
//     //     //   { data: { id: 'line14',name:'Nov'  },position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 * 6 }  },
//     //     //   { data: { id: 'line14:line', parent:'line14',name:frist_nameset[6]}, position: { x: first_tree_position.x + 100, y: first_tree_position.y + 20 * 6 }  },
//     //     // }
//     //   ]);
//     // }
//   }
// }

  function add_new_group(member_id,circle_position,line_position){
    var temp;
    if (member_id==0) temp = "Mill,M1";
    else temp = member_id;
    var new_array = [
      {group: "nodes",  data: { id: 'e' + member_id, name:temp},position: { x: circle_position.x + 50 , y: circle_position.y - 50 }  },
      {group: "nodes",  data: { id: 'g' + member_id },position: { x: circle_position.x + 100, y: circle_position.y }  },
      {group: "nodes",  data: { id: 'k' + member_id, name: 'FFB'},position: { x: circle_position.x + 50 , y: circle_position.y + 50 }  },
      { data: { id: 'bluecircle' + member_id ,parent:'j' + i }, classes:'.bluecircle' ,position: { x: circle_position.x, y: circle_position.y } ,selected:false, selectable : true,locked:false },
      { data: { id: 'redbutton' + member_id,parent:'j'  + i }, classes:'.redbutton' ,position: { x: circle_position.x - 5, y: circle_position.y - 8} ,selected:false, selectable : true,locked:false },
      { data: { id: 'greenbutton' + member_id,parent:'j'  + i }, classes:'.greenbutton' ,position: { x: circle_position.x, y: circle_position.y + 10 } ,selected:false, selectable : true,locked:false },
      
      { data: { id: member_id + 'line1'}, position: { x: line_position.x, y:line_position.y }  },
      { data: { id: member_id + 'line2', }, group:"nodes" , position: { x: line_position.x + 100, y: line_position.y }  },
      { data: { id: member_id + 'line2-line', parent:member_id + 'line2', name:frist_nameset[0]}, position: { x: line_position.x + 100, y: line_position.y }  },
      { data: { id: member_id + 'line3'},position: { x: line_position.x, y:line_position.y + 20 }  },
      { data: { id: member_id + 'line4'}, position: { x: line_position.x + 100, y: line_position.y + 20 }  },
      { data: { id: member_id + 'line4-line', parent:member_id + 'line4',name:frist_nameset[1]}, class:'.line4-line' , position: { x: line_position.x + 100, y: line_position.y + 20 }  },
      { data: { id: member_id + 'line5'},position: { x: line_position.x, y: line_position.y + 20 * 2 }  },
      { data: { id: member_id + 'line6'},class:'.line6',position: { x: line_position.x + 100, y: line_position.y + 20 * 2 }  },
      { data: { id: member_id + 'line6-line', parent:member_id + 'line6',name:frist_nameset[2]}, class:'.line6-line' ,position: { x:line_position.x + 100, y: line_position.y + 20 * 2 }  },
      { data: { id: member_id + 'line7'},position: { x: line_position.x, y: line_position.y + 20 * 3 }  },
      { data: { id: member_id + 'line8'},class:'.line8',position: { x: line_position.x + 100, y: line_position.y + 20 * 3 }  },
      { data: { id: member_id + 'line8-line', parent:member_id + 'line8',name:frist_nameset[3]},class:'.line8-line' , position: { x: line_position.x + 100, y: line_position.y + 20 * 3 }  },
      { data: { id: member_id + 'line9'},position: { x: line_position.x, y: line_position.y + 20 * 4 }  },
      { data: { id: member_id + 'line10'},class:'.line10',position: { x: line_position.x + 100, y: line_position.y + 20 * 4 }  },
      { data: { id: member_id + 'line10-line', parent:member_id + 'line10',name:frist_nameset[4]}, class:'.line10-line' ,position: { x: line_position.x + 100, y: line_position.y + 20 * 4 }  },
      { data: { id: member_id + 'line11'},position: { x: line_position.x, y: line_position.y + 20 * 5 }  },
      { data: { id: member_id + 'line12'},class:'.line12',position: { x: line_position.x + 100, y: line_position.y + 20 * 5 }  },
      { data: { id: member_id + 'line12-line', parent:member_id + 'line12',name:frist_nameset[5] }, class:'.line12-line' ,position: { x: line_position.x + 100, y: line_position.y + 20 * 5 }  },
      { data: { id: member_id + 'line13'},position: { x: line_position.x, y: line_position.y + 20 * 6 }  },
      { data: { id: member_id + 'line14'},class:'.line14',position: { x: line_position.x + 100, y: line_position.y + 20 * 6 }  },
      { data: { id: member_id + 'line14-line', parent:member_id + 'line14',name:frist_nameset[6]}, class:'.line14-line' ,position: { x: line_position.x + 100, y: line_position.y + 20 * 6 }  },
      { data: { id: member_id + 'line15'},position: { x: line_position.x, y: line_position.y + 20 * 7 }  },
      { data: { id: member_id + 'line16'},class:'.line16',position: { x: line_position.x + 100, y: line_position.y + 20 * 7 }  },
      { data: { id: 'more' + member_id, parent:member_id + 'line16',name:frist_nameset[7]}, class:'.more' ,position: { x: line_position.x + 100, y: line_position.y + 20 * 7 }  },
    
      
      {group: "edges",  data: { source: 'e' + member_id, target: 'bluecircle' + member_id }},
      {group: "edges",  data: { source: 'g' + member_id, target:  'bluecircle' + member_id }},
      {group: "edges",  data: { source: 'k' + member_id, target:  'bluecircle' + member_id}},
      {group: "edges",  data: { source: member_id + 'line1',target:member_id + 'line2'}},
      {group: "edges",  data: { source: member_id + 'line3',target:member_id + 'line4'}},
      {group: "edges",  data: { source: member_id + 'line5',target:member_id + 'line6'}},
      {group: "edges",  data: { source: member_id + 'line7',target:member_id + 'line8'}},
      {group: "edges",  data: { source: member_id + 'line9',target:member_id + 'line10'}},
      {group: "edges",  data: { source: member_id + 'line11',target:member_id + 'line12'}},
      {group: "edges",  data: { source: member_id + 'line13',target:member_id + 'line14'}},
      {group: "edges",  data: { source: member_id + 'line15',target:member_id + 'line16'}},
      {group: "edges",  data: { source: member_id + 'line1',target:member_id + 'line15'}}
    ];
    cy.style().selector("node[id = 'e"+ member_id + "']").style({
      "font-family":"Georgia",
      "font-size":"10px"
    });
    cy.style().selector("node[id = 'k"+ member_id + "']").style({
      "font-family":"Georgia",
      "font-size":"10px",
      "text-valign":"bottom"
    });
    cy.style().selector("node[id = 'bluecircle"+ member_id + "']").style({
      'background-color': 'blue',
      'width' : '20px',
      'height' : '20px'
    });
    cy.style().selector("node[id = 'redbutton"+ member_id + "']").style({
      'background-color': 'red',
      'width' : '5px',
      'height' : '5px'
    });
    cy.style().selector("node[id = 'greenbutton"+ member_id + "']").style({
      'background-color': 'green',
      'width' : '5px',
      'height' : '5px'
    });
    cy.style().selector("node[id = '"+ member_id + "line2']").style({
      "background-color":"white",
      "border-width":"0px",
      "text-valign":"center",
      "text-halign":"left",
      "shape":"rectangle",
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = '"+ member_id + "line4']").style({
      "background-color":"white",
      "border-width":"0px",
      "text-valign":"center",
      "text-halign":"left",
      "shape":"rectangle",
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = '"+ member_id + "line6']").style({
      "background-color":"white",
      "border-width":"0px",
      "text-valign":"center",
      "text-halign":"left",
      "shape":"rectangle",
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = '"+ member_id + "line8']").style({
      "background-color":"white",
      "border-width":"0px",
      "text-valign":"center",
      "text-halign":"left",
      "shape":"rectangle",
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = '"+ member_id + "line10']").style({
      "background-color":"white",
      "border-width":"0px",
      "text-valign":"center",
      "text-halign":"left",
      "shape":"rectangle",
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = '"+ member_id + "line12']").style({
      "background-color":"white",
      "border-width":"0px",
      "text-valign":"center",
      "text-halign":"left",
      "shape":"rectangle",
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = '"+ member_id + "line14']").style({
      "background-color":"white",
      "border-width":"0px",
      "text-valign":"center",
      "text-halign":"left",
      "shape":"rectangle",
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = '"+ member_id + "line16']").style({
      "background-color":"white",
      "border-width":"0px",
      "text-valign":"center",
      "text-halign":"left",
      "shape":"rectangle",
      "width":10,
      "height":10
    });

    cy.style().selector("node[id = '"+ member_id + "line2-line']").style({
      "background-color":"#f4cccc",
      "shape":"rectangle",
      "font-size":"6px",
      "font-family":"Georgia",
      "text-valign":"center",
      "text-halign":"left",
      "border-width":0.3,
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = '"+ member_id + "line4-line']").style({
      "background-color":"#f4cccc",
      "shape":"rectangle",
      "font-size":"6px",
      "font-family":"Georgia",
      "text-valign":"center",
      "text-halign":"left",
      "border-width":0.3,
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = '"+ member_id + "line6-line']").style({
      "background-color":"#f4cccc",
      "shape":"rectangle",
      "font-size":"6px",
      "font-family":"Georgia",
      "text-valign":"center",
      "text-halign":"left",
      "border-width":0.3,
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = '"+ member_id + "line8-line']").style({
      "background-color":"#f4cccc",
      "shape":"rectangle",
      "font-size":"6px",
      "font-family":"Georgia",
      "text-valign":"center",
      "text-halign":"left",
      "border-width":0.3,
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = '"+ member_id + "line10-line']").style({
      "background-color":"#f4cccc",
      "shape":"rectangle",
      "font-size":"6px",
      "font-family":"Georgia",
      "text-valign":"center",
      "text-halign":"left",
      "border-width":0.3,
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = '"+ member_id + "line12-line']").style({
      "background-color":"#f4cccc",
      "shape":"rectangle",
      "font-size":"6px",
      "font-family":"Georgia",
      "text-valign":"center",
      "text-halign":"left",
      "border-width":0.3,
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = '"+ member_id + "line14-line']").style({
      "background-color":"#f4cccc",
      "shape":"rectangle",
      "font-size":"6px",
      "font-family":"Georgia",
      "text-valign":"center",
      "text-halign":"left",
      "border-width":0.3,
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = '"+ member_id + "line16-line']").style({
      "background-color":"#f4cccc",
      "shape":"rectangle",
      "font-size":"6px",
      "font-family":"Georgia",
      "text-valign":"center",
      "text-halign":"left",
      "border-width":0.3,
      "width":10,
      "height":10
    });
    cy.style().selector("node[id = 'more"+ member_id + "']").style({
      "background-color":"#f4cccc",
      "shape":"rectangle",
      "font-size":"6px",
      "font-family":"Georgia",
      "text-valign":"center",
      "text-halign":"left",
      "border-width":0.3,
      "width":10,
      "height":10
    });
            
    // console.log( member_id);
    cy.add(new_array);

    var str = '#bluecircle' + member_id + ',#redbutton' + member_id + ',#greenbutton' + member_id + ',#e' + member_id + ',#g' + member_id + ',#k' + member_id + ',#more' + member_id+ ',#'+member_id +'line2-line' + ',#' + member_id + 'line4-line' + ',#' + member_id + 'line6-line' + ',#' + member_id + 'line8-line' + ',#' +member_id+'line10-line' + ',#'+member_id +'line12-line,#' +member_id + 'line14-line,#' +member_id+'line1,#' + member_id + 'line3,#' + member_id + 'line5,#' + member_id +'line7,#' + member_id + 'line9,#' + member_id + 'line11,#' + member_id +'line13,#' + member_id + 'line15';
    cy.automove({
        nodesMatching: cy.$(str),
        reposition: 'drag',
        dragWith: cy.$(str)
      });
      cy.on('cxttap', 'node', function( evt ){
        var tgt = evt.target || evt.cyTarget; // 3.x || 2.x
    
        tgt.remove();
      });
  }

  function delete_old_group(member_id){
    cy.remove( cy.$("#bluecircle"+ member_id) );
    cy.remove( cy.$("#redbutton" + member_id) );
    cy.remove( cy.$("#greenbutton" + member_id) );
    cy.remove( cy.$("#e" + member_id) );
    cy.remove( cy.$("#k" + member_id) );
    cy.remove( cy.$("#g" + member_id) );
    for (j=1;j<17;j++){
      cy.remove( cy.$("#"+member_id+"line"+j) );
    }
  }
}

///second group's nameset




// var nameset2 = [name1,name2,name3,name4,name5,name6,name7,name8,name9,name10,name11]

///thired group's nameset

// var nameset3 = [name1,name2,name3,name4,name5,name6,name7,name8,name9,name10,name11]

// var id 

///name arrange

// name_arrange(frist_nameset);



function name_arrange(array){

  // var new_array = [];
  
  // array.sort();
  // array.reverse();
  
  // /// if array length is more than 6,
  // if (array.length>8){
  //   var temp;
  //   temp = array[array.length-1];
  //   for (i=0;i<array.length-8;i++){
  //     array[array.length-1-i] = array[array.length-1-i-1];
  //   }
  //   array[7] = temp;
  // }
  console.log("===array arrange==="+array);
  // for (i=0;i<array.length;i++){
  //   new_array[i] = array[i].slice(0,3);    
  // }

  console.log("===new_array arrange===" + new_array);
  
  // month_arrange(new_array,array,);
  //new Array(4).join(' ') + 

}
function month_arrange(array1,array2){
  // for (i=1;i<array1.length;i++){
  //   // if ()
  // }
}

