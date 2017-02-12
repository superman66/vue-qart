/**
 * Created by superman on 17/2/6.
 */

import QArt from 'qartjs';

export default {
    inserted: function(el, binding){
        const config = binding.value;
      console.log(config);
        new QArt({
            value: config.value,
            imagePath: config.imagePath,
            filter: config.filter
        }).make(el);
    }
};