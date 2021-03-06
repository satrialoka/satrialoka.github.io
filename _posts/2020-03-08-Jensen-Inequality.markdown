---
layout: post
title:  "Jensen Inequality"
date:   2020-03-07 21:00:00 +0100
categories: notes
comments: true
---
In this post I will try to explain what Jensen Inequality is. 
Jensen Inequality is an inequality in mathematics that relates to the concave/convex function. A function is concave if the line segment between any two points on it lies below or on the graph. Mathematically we can write:

function $$f(x)$$ is concave if, if any $$a,b,\alpha$$ satisfies:
\begin{equation}
   f(\alpha a+(1-\alpha)b) \geq \alpha f(a) + (1-\alpha) f(b)
\end{equation} 

and $ 0 \leq \alpha \leq 1$, also $$a,b \in X $$, $$X$$ is a concave set. 

Whereas, in a convex function, the line segment between any two points is lies above or on the graph. So, we only need to change the $$\geq$$ sign above to $$\leq$$.
for example $$\log(x)$$ is a concave function, and $$-\log(x)$$ is a convex function. The definition above can be visualized as follows:

<center>
<img src="\assets\2020-03-08-Jensen-Inequality\log_funct.png" width="500" height="350" />
<img src="\assets\2020-03-08-Jensen-Inequality\min_log_funct.png" width="500" height="350" />
</center>
That's the case for 2 points, consider we have 3 points. if $$\alpha_1+\alpha_2+\alpha_3 = 1$$ and $$\alpha_k \geq 0$$ and $$f(x)$$ is concave:

\begin{equation}
   f(\alpha_1 a_1+\alpha_2 a_2+\alpha_3 a_3) \geq \alpha_1 f(a_1)+\alpha_2 f(a_2)+\alpha_3 f(a_3)
\end{equation} 

Thus, using the definition of [expectation](https://en.wikipedia.org/wiki/Expected_value) we can generalize above equation to (concave and convex respectively): 
<center>
$$ f(\mathbb{E}_{P(x)}x) \geq \mathbb{E}_{P(x)} f(x)$$ 
$$ f(\mathbb{E}_{P(x)}x) \leq \mathbb{E}_{P(x)} f(x)$$ 
</center>

Thats it, Jensen Inequality is the generalized form of the statement that the secant line of a convex function lies above the graph of the function 


### source
[Wikipedia](https://en.wikipedia.org/wiki/Jensen%27s_inequality)

[Coursera - HSE bayesian methods in ML](https://www.coursera.org/learn/bayesian-methods-in-machine-learning/home/welcome)




