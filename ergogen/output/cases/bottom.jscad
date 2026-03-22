function left_extrude_1_outline_fn(){
    return new CSG.Path2D([[87.975,-140.025],[87.975,-58.725]]).appendArc([88,-58.409762],{"radius":2,"clockwise":true,"large":false}).appendPoint([88,-46.625]).appendArc([90,-44.625],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.25,-44.625]).appendArc([168.25,-46.625],{"radius":2,"clockwise":true,"large":false}).appendPoint([168.25,-47.725]).appendPoint([168.275,-47.725]).appendPoint([168.275,-48.725]).appendArc([170.275,-50.725],{"radius":2,"clockwise":false,"large":false}).appendPoint([185.025,-50.725]).appendArc([187.025,-52.725],{"radius":2,"clockwise":true,"large":false}).appendPoint([187.025,-54.725]).appendArc([189.025,-56.725],{"radius":2,"clockwise":false,"large":false}).appendPoint([210.025,-56.725]).appendArc([212.025,-58.725],{"radius":2,"clockwise":true,"large":false}).appendPoint([212.025,-73.475]).appendArc([214.025,-75.475],{"radius":2,"clockwise":false,"large":false}).appendPoint([222.525,-75.475]).appendArc([224.525,-77.475],{"radius":2,"clockwise":true,"large":false}).appendPoint([224.525,-121.275]).appendArc([222.525,-123.275],{"radius":2,"clockwise":true,"large":false}).appendPoint([221.0916499,-123.275]).appendArc([220.5180735,-125.094152],{"radius":1,"clockwise":false,"large":false}).appendPoint([255.1313172,-149.3306062]).appendArc([255.3768928,-150.7233346],{"radius":1,"clockwise":true,"large":false}).appendPoint([231.4300765,-184.9229325]).appendArc([230.0373481,-185.1685081],{"radius":1,"clockwise":true,"large":false}).appendPoint([187.6706505,-155.503027]).appendArc([187.375,-155.525],{"radius":2,"clockwise":true,"large":false}).appendPoint([143.875,-155.525]).appendArc([141.875,-153.525],{"radius":2,"clockwise":true,"large":false}).appendPoint([141.875,-147.775]).appendArc([139.875,-145.775],{"radius":2,"clockwise":false,"large":false}).appendPoint([90,-145.775]).appendArc([88,-143.775],{"radius":2,"clockwise":true,"large":false}).appendPoint([88,-140.340238]).appendArc([87.975,-140.025],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = left_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        