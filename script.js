//console.log("Hello");
const url="https://rediff.com";
module.exports=url;
//console.log(module);

function logger()
{
    console.log("Function called");
}
module.exports=logger;

//module.exports={logger:logger,url:url}
//module.exports={logger,url};

module.exports.endpoint=url;
module.exports.logger=logger;


console.log(module);
