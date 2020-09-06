<template>
    <div id="app">
        <div class="container">
            <div class="seach-wrapper">
                <b-container class="search-bar">
                    <b-row>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" id="searchbox" type="search" placeholder="What are you looking for?" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            <br>
                           
                        </form>
                    </b-row>
                </b-container> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#searchbox {
    width: 50rem;
    margin: 0 auto;
}
.mb-2 {
    padding: 30px;
}
</style>