import React, {useRef,useEffect} from 'react';
import MaterialTable from "material-table";
import {connect} from "react-redux";
import {GET_POSITION} from "./stores/actions";
import { useSelector, useDispatch } from "react-redux";

const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
    console.log('ref.current.offsetTop',ref.current.offsetTop)
    console.log('ref.current.offsetTop',window.scrollTo(0, ref.current.offsetTop))
}
const scrollTest = (postion) => {
    window.scrollTo(0, 0)
}

function App() {
    const dispatch = useDispatch();
    const ui = useSelector(state => state.pos);

    useEffect(
        ()=>{
            window.scrollTo(0, ui);
            console.log('window.scrollY', window.scrollY)
            let last_known_scroll_position = 0;
            let ticking = false;

            function doSomething(scroll_pos) {
                // Do something with the scroll position
                dispatch({type:GET_POSITION,payload:scroll_pos})
                console.log('scroll_pos',scroll_pos)
            }

            window.addEventListener('scroll', function(e) {
                last_known_scroll_position = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        doSomething(last_known_scroll_position);
                        ticking = false;
                    });
                    ticking = true;
                }
            });
            //setTimeout(()=>{window.scrollTo(0, 0)},800)
        },[]
    )

    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

  return (
    <div className="App">
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
                onRowClick={(param1,param2)=>{
                    alert('click');
                    console.log('param1',param1)
                    console.log('param2',param2)
                    console.log('currentTarget',param1.currentTarget)
                    console.log('window.scrollY', window.scrollY)


                }}
                //tableRef={myRef}
                onSelectionChange={()=>console.log('SELECTED1111')}
                onRowSelected={(ee,e)=>{
                    console.log('ee',ee)
                    console.log('e',e)
                }}
                columns={[
                    { title: "Adı", field: "name" },
                    { title: "Soyadı", field: "surname" },
                    { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
                    {
                        title: "Doğum Yeri",
                        field: "birthCity",
                        lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
                    }
                ]}
                data={[
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
                    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },


                ]}
                title="Demo Title"
                options={{
                    paging: false,
                    selection: true,
                    exportButton: true
                }}
            />
        </div>
        <button onClick={scrollTest}> Click to scroll </button>
    </div>
  );
}

const mapStateToProps = state => ({
    pos: state.pos
})
const mapDispatchToProps = dispatch => ({
    addPostion(pos){
        dispatch({
            type: GET_POSITION,
            pos
        })
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
