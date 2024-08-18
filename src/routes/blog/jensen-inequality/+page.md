---
title: Jensen Inequality
date: "2020-03-07"
draft: false
category: technical
tags: math, machine learning, inequality
---

Jensen Inequality is an inequality in mathematics that relates to the concave/convex function. A function is concave if the line segment between any two points on it lies below the graph of the function. Mathematically we can write:

function $f(x)$ is concave if, if any $a,b,\alpha$ satisfies:

$$
   f(\alpha a+(1-\alpha)b) \geq \alpha f(a) + (1-\alpha) f(b) \tag{1}
$$

where $0 \leq \alpha \leq 1$, and $a,b \in X$. Here, $X$ is a concave set.

Whereas, in a convex function, the line segment between any two points is lies above the graph. So, we only need to change the $\geq$ sign in equation $(1)$ to $\leq$.

For example $\log(x)$ is a concave function, and $-\log(x)$ is a convex function. The definition above can be visualized as follows:

<div style="display: flex; justify-content: center;">
    <img src="/images/post-images/jensen-inequality/log_funct.png" style="width: 50%; height: auto;" />
    <img src="/images/post-images/jensen-inequality/min_log_funct.png" style="width: 50%; height: auto;" />
</div>

That's the case for 2 points. Now, consider if we have 3 points instead. If $\alpha_1+\alpha_2+\alpha_3 = 1$ and $\alpha_k \geq 0$ and $f(x)$ is concave:

$$
   f(\alpha_1 a_1+\alpha_2 a_2+\alpha_3 a_3) \geq \alpha_1 f(a_1)+\alpha_2 f(a_2)+\alpha_3 f(a_3)
$$

Thus, using the definition of [expectation](https://en.wikipedia.org/wiki/Expected_value), we can generalize above equation to (concave and convex respectively):

$$
f(\mathbb{E}_{P(x)}x) \geq \mathbb{E}_{P(x)} f(x) \\
f(\mathbb{E}_{P(x)}x) \leq \mathbb{E}_{P(x)} f(x)
$$

Thats it, Jensen Inequality is the generalized form of the statement that the secant line of a convex function lies above the graph of the function.

### References:

- [Wikipedia](https://en.wikipedia.org/wiki/Jensen%27s_inequality)
- [Coursera - HSE bayesian methods in ML](https://www.coursera.org/learn/bayesian-methods-in-machine-learning/home/welcome)
