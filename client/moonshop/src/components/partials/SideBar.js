import React from 'react';

const SideBar = () => {
    return(
        <div className='shop-sidebar-wrapper col-lg-3 col-md-3 col-sm-12'>
            <div className='shop-search'>
                <form>
                    <input type="text" className="form-control" placeholder="Tìm kiếm..."/>
                    <button>
                        <img src='https://andshop-react.netlify.app/static/media/search.4672f25b.svg' alt='icon search'/>
                    </button>
                </form>
            </div>
            <div className='shop-sidebar-boxed'>
                <h4>Dòng Laptop</h4>
                <form>
                <label className="checkcontainer">One
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                <label className="checkcontainer">Two
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                <label className="checkcontainer">Three
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                <label className="checkcontainer">Four
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                <label className="checkcontainer">Five
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                </form>
            </div>
            <div className='shop-sidebar-boxed'>
                <h4>Thương Hiệu</h4>
                <form>
                <label className="checkcontainer">One
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                <label className="checkcontainer">Two
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                <label className="checkcontainer">Three
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                <label className="checkcontainer">Four
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                <label className="checkcontainer">Five
                    <input type="radio" name="radio"/>
                    <span className="radiobtn"></span>
                </label>
                </form>
            </div>
        </div>
    )
}

export default React.memo(SideBar);