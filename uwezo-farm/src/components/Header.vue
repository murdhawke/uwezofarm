<template>
    <div id="app">
        <div class="header-wrapper">
                <b-img  id="headerimg" src="https://images.pexels.com/photos/3458362/pexels-photo-3458362.jpeg?cs=srgb&dl=pexels-alex-rusin-3458362.jpg&fm=jpg" fluid alt="Fluid-grow image"></b-img>
                <div id="main-jumbo">
                    <header>
                        <h1 class="main-heading">Innovative Farming</h1>
                        <h2 class="subheading"><i>Convenient. Cheap.  Reliable.</i></h2>
                        <h3 class="normal-text">Hassle free farming at your hands.  From anywhere in the world!</h3>
                    </header>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;700&family=Source+Sans+Pro:ital@0;1&display=swap');
.header-wrapper {
    position: relative;
    width: 100%;
    font-size: 0;
    z-index: 0;
}

#headerimg {
    width:100%;
    height:50%;
    object-fit:cover;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: rgba(0,0,0,0.5);

}
#main-jumbo {
    top: 0;
    position: absolute;
    margin-top: 3rem;
    margin-left: 60px;
    margin-right: 65%;
    z-index: 1;
    padding: 0;
}
.main-heading {
    font-size: 90px;
    font-weight: 300px;
    font-family: 'Source Sans Pro', sans-serif;
    padding: 10px;
}
.subheading {
    font-family: 'Lato', sans-serif;
}
.normal-text {
    font-family: 'Lato', sans-serif;
    padding: 10px;

    
    
}
</style>


