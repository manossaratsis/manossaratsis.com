---
title: The optimization potential of floor-plan typologies
---
* TOC
{:toc}
{:toc_levels 1..2}
{:.sidebar}

# The optimization potential of floor-plan typologies in early design energy modeling
---

[Full paper](http://www.ibpsa.org/proceedings/BS2015/p2455.pdf)

**Dogan, T., Saratsis, E., & Reinhart, C.F. (2015)**

*Building Simulation 2015: International Conference <br/>
of the Building Performance Simulation Association <br/>
Hyderabad, India, December 2015 <br/>
pp. 1853-1860*

## Abstract

Based on a consensus in the field that energy modeling should be applied as early as possible in the design process to maximize its impact on important design decisions, multi-zone thermal simulations are now used with increasing frequency in the earliest design stages. In the massing model phase, when the interior subdivision of a building is yet unknown, zoning standards such as ASHRAE 90.1 Appendix G assist modelers by prescribing a subdivision scheme with core and a consistently deep perimeter regions along the facade. This scheme, however, hardly ever resembles actual interior space subdivisions and thus raises the question of accuracy and usefulness of such simulations. This manuscript hence analyzes the significance of interior subdivisions on simulation results by thoroughly comparing the energy use intensity (EUI) levels for a representative set of floor-plans against the ASHRAE-prescribed zoning scheme. A sample set of 1200 simulations reveal a RMSE of 15% for total EUI but also reveal a RMSE of 175% and 105% for predicted heating and cooling loads. This suggests that the ASHRAE zoning scheme has only limited applicability for early design energy optimization.



> An important design optimization potential, the floor plan layout itself, is overlooked.



## Methodology

The methodology is organized into two distinct phases: **sorting** and **modeling**. In [Phase 1](#phase-1-sorting) we present a process of typological sorting for floor plans based on their exterior shape and interior organization. This process leads to the creation of a comprehensive floor plan typology matrix with samples from contemporary architectural design literature. In [Phase 2](#phase-2-modeling) these samples are translated into energy models based on two zoning paradigms:



## Phase 1: Sorting

### Level 1: Exterior shape


*Figure 2: Interior organization typologies*
* **Vertical Point:** Circulation core placed in the center or periphery of the building. The core can house only circulation space or can be designed more generously to incorporate common/shared spaces (e.g. living room/common space as circulation center).
### Typological matrix

![figure-3](fig3.jpg){: .figure}
*Figure 3: Typological matrix of selected floor plans*


This phase presents how the thermal models are built, configured and compared. Firstly, the thermal zoning scheme for each subdivision paradigm is explained. This is followed by a description of the workflow to convert the zones into 3D multi-zone thermal model geometry. After the geometric setup, this phase also describes how the zone geometry is combined with zone specific properties such as materiality, loads and conditioning configurations. Lastly, the methodology to compare and analyze the simulation results is detailed.


![figure-4](fig4.jpg){: .figure}
*Figure 4: Typological matrix with ASHRAE-prescribed zoning*







*Figure 5: Workflow diagram*

## Results

*Figure 6: Distribution chart of total EUI error*

The distribution chart shows that 75% of the simulated EUI predicted by the ASHRAE zoned models lies within a  +-15% margin. The distribution of the error of the EUI components is given in the Figures 7-10. Here the spread in the distribution chart is significantly wider. For predicted electric lighting only 33% are within the bounds of +-15%. For electric equipment, heating and cooling only 50%, 67% and 58% respectively lie within the margin.

![figure-7](fig7.jpg){: .figure}
*Figure 7: Distribution chart of cooling load error*

![figure-8](fig8.jpg){: .figure}
*Figure 8: Distribution chart of heating load error*

![figure-9](fig9.jpg){: .figure}
*Figure 9: Distribution chart of electric lighting error*

![figure-10](fig10.jpg){: .figure}
*Figure 10: Distribution chart of equipment load error*

We also compute the RMSE of the total EUI and its components over all scenarios for each floor plan in order to see a relationship between error and the actual geometry. The result is given in Figure 11. It is interesting to note that floor plans such as B3, D4 and D5 report significantly smaller errors than others. This is mostly due to the geometric similarity of the architectural plan and the ASHRAE subdivision in these specific cases where both variants have similar size core regions. One should also note that similarities in topology do not guarantee consistent results between the two subdivision paradigms. A good example that showcases this effect is case E3. Here the core and perimeter regions are almost identical topologically but differ significantly in proportion and uncle cause heating and cooling predictions that differ 124% and 265% on average throughout all scenarios. Floor plans with circulation at the edges (Typologies C1-C5) instead of a central corridor have a tendency to produce significant deviation between the two zoning paradigms. Here the circulation spaces serve as a thermal buffer zone and hence lower the predicted energy use. This effect is especially pronounced when the circulation spaces are unconditioned.

![figure-11](fig11.jpg){: .figure}
*Figure 11: RMSE plotted on the floor plan matrix*


|          | Component     | Value
|:---      | :---          | :---
| **RMSE** | **Total**     | **+15%**
|          | Equipment     | +24% 
|          | Lighting      | +37%
|          | Heating       | +175%
|          | Cooling       | +105%
| **MBE**  | **Total**     | **+2%**
|          | Equipment     | +3%
|          | Lighting      | -15%
|          | Heating       | +32%
|          | Cooling       | +22%
| **MIN**  | **Total**     | **-29%**
|          | Equipment     | -43%
|          | Lighting      | -84%
|          | Heating       | -100%
|          | Cooling       | -50%
| **MAX**  | **Total**     | **+58%**
|          | Equipment     | +61%
|          | Lighting      | +118%
|          | Heating       | +2,700%
|          | Cooling       | +1,250%

*Table 3: Summary of results*


## Discussion

The foregoing section demonstrated that the zoning paradigm recommended in ASHRAE 90.1 Appendix G for early design evaluations can lead to significant inconsistencies in the calculation of energy loads when compared to zoning that follows a real floor plan layout. With an RMSE of around 175% for heating and 105% for cooling this study suggests that the ASHRAE zoning paradigm only has limited applicability for early design evaluations. It shows that the architectural essence of a floor plan layout is only sufficiently captured for very specific building types and proportions. The assumptions proposed by this paradigm reduce the complexity of architectural design, but also reduce design’s potential to have a positive impact on energy efficiency. A typical example is the assumption that a building is always subdivided to core and perimeter regions, generated by a standard set of geometric manipulations. While using ASHRAE’s zoning paradigm might be a good first approach to test the climate-responsiveness of a massing model or a building envelope, the efficiency gain potential of the floor plan layout itself is overlooked. How could architects tap into this potential?

Similar to the previous simulation setup the floor plan is tested for multiple climates, construction standards and use. A 20m by 60m floor plate is simulated with nine different subdivisions. The plans are shown in Figure 12. The zoning consists of a main use area and circulation that is kept constant at 150m<span class="sup">2</span> per floor in all variants. The circulation area is visualized in light grey. A window-wall ratio of 50% is assumed for both the north and the south facade. The nine zoning variants are tested in the same 24 scenarios mentioned in the methodology section. 
*Figure 12: Schematic design floor plan design variants with identical circulation area*

The difference in the results is significant. Figure 13 shows a load breakdown for one scenario. In this scenario the choice of the floor plan layout by itself can make or break the LEED credits achievable for building energy load reduction.

![figure-13](fig13.jpg){: .figure}
*Figure 13: Load breakdown for all variants in one simulation scenario*


*Figure 14: Delta of the minimum and maximum energy load divided by the minimum achievable load*


> This result sheds new light on the relationship between form and energy in general.


* At the urban scale, this level of detail might seem untimely. However, by implementing an architecturally conscious thermal zoning process early on, the developer of a master plan can tap into an additional energy efficiency potential that might be very valuable when defining performance and carbon footprint targets. 


## Conclusion

This paper shows significant inconsistencies in predicted energy use intensity for the ASHRAE 90.1 Appendix G zoning paradigm when compared to the actual floor plan layout of a building. A significant energy optimization potential is revealed in the floor plan design process. The form-sensitive nature of the presented workflow could increase the interest of architects in energy modeling in general.

## Acknowledgements

The authors would like to thank Transsolar Energietechnik GmbH Munich and the Alexander S. Onassis Public Benefit Foundation for productive discussions and partial funding of this research project.

## References

* AIA. 2012. The AIA Energy Modeling Practice Guide. Retrieved March 2015. [https://www.aia.org/resources/8056-architects-guide-to-integrating-energy-modeli](https://www.aia.org/resources/8056-architects-guide-to-integrating-energy-modeli)

* ANSI/ASHRAE/IESNA Standard 90.1-2013 Appendix G

* de Wilde, P., Augenbroe, G., & van der Voorden, M. (2002). Design Analysis Integration: Supporting the Selection of Energy Saving Building Components. Building and environment 37 (8–9): 807–816.

* DOE (2012). EnergyPlus Energy Simulation Software, V.7, [https://energyplus.net](https://energyplus.net)



* Dogan, T., Reinhart, C.F., & Michalatos, P. (2015). Autozoner: an algorithm for automatic thermal zoning of buildings with unknown interior space definitions. Journal of Building Performance Simulation, (ahead-of-print): 1-14.

* Ebner, P. (2010). Typology+ Innovative Residential Architecture. Birkhäuser GmbH.

* Klein, S.A. (1979). TRNSYS, a transient system simulation program. Solar Energy Laboratory, University of Wisconsin—Madison.




