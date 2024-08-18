---
title: MAP Derivation of the GPML book
date: "2023-05-27"
draft: false
math: true
category: technical
tags: math, machine learning, gaussian, bayesian
---

In this post, we will try to derive Maximum Aposteriori Probability based on Rasmussen's book on Gaussian Process for Machine Learning (GPML). We will refer to equation 2.7 and 2.8 in the book. This post is not intended to explain what and why the Maximum Aposteriori Probability estimation is. For those whose interested more, the [PML Book chapter 4.5](https://probml.github.io/pml-book/book1.html) is a good start.

Maximum Aposteriori Probability (MAP) estimate, is an estimate of unknown parameter $\mathbf{w}$. Keep in mind that even MAP incorporates prior distribution, it is not a fully bayesian treatment since we dont fully integrates the normalization terms of the [Bayes Rule](https://en.wikipedia.org/wiki/Bayesian_inference). Thus it's served as a point estimate of the mode of the posterior distribution of $\mathbf{w}$

Let's start with the Bayes Rule from the equation 2.5 of the book:

$$
p(\mathbf{w} \mid \mathbf{y}, X)=\frac{p(\mathbf{y} \mid X, \mathbf{w}) p(\mathbf{w})}{p(\mathbf{y} \mid X)}
$$

Note that in this case we assume that the likelihood $p(\mathbf{y} \mid X, \mathbf{w})$ and prior $p(\mathbf{y} \mid X)$ are normally distributed (see equations 2.3 and 2.4). Because of this, the posterior is also normal, since normal prior is a [conjugate](https://en.wikipedia.org/wiki/Conjugate_prior) with normal posterior. Then, since the normalization term (also called evidence) is not depends on $\mathbf{w}$ we can drop it off and we can define the approximation of the posterior as:

$$
\begin{aligned}
    p(\mathbf{w}|X,\mathbf{y})  & \propto \exp(- \frac{1}{2 \sigma_n^2}(\mathbf{y}-X^\intercal \mathbf{w})^\intercal (\mathbf{y}-X^\intercal \mathbf{w})) \exp(- \frac{1}{2} \mathbf{w}^\intercal \Sigma^{-1}_p \mathbf{w})
\end{aligned}
$$

To derive the closed form formula of the posterior in the left term of the above equation, we use the [completing the square](https://davidrosenberg.github.io/mlcourse/Notes/completing-the-square.pdf) formula:

$$\mathbf{w}^\intercal \mathbf{M} \mathbf{w} - 2 \mathbf{b}^\intercal \mathbf{w} = (\mathbf{w} - \mathbf{M}^{-1} \mathbf{b})^\intercal \mathbf{M} (\mathbf{w}-\mathbf{M}^{-1} \mathbf{b}) - \mathbf{b}^\intercal \mathbf{M}^{-1} \mathbf{b}$$

the trick is to rearrange the approximate posterior formula to match the left term of the completing the square formula above, then using the equality we can recover a gaussian distribution from the right term of the above equation.

$$
\begin{aligned}
    p(\mathbf{w}|X,\mathbf{y})  & \propto \exp(- \frac{1}{2 \sigma_n^2}(\mathbf{y}-X^\intercal \mathbf{w})^\intercal (\mathbf{y}-X^\intercal \mathbf{w})) \exp(- \frac{1}{2} \mathbf{w}^\intercal \Sigma^{-1}_p \mathbf{w}) \\
                                & \propto \exp(- \frac{1}{2 \sigma_n^2}(\mathbf{y}-X^\intercal \mathbf{w})^\intercal (\mathbf{y}-X^\intercal \mathbf{w}) - \frac{1}{2} \mathbf{w}^\intercal \Sigma^{-1}_p \mathbf{w}) \\
                                & \propto \exp(- \frac{1}{2}(\sigma_n^{-2}(\mathbf{y}-X^\intercal \mathbf{w})^\intercal (\mathbf{y}-X^\intercal \mathbf{w})+ \mathbf{w}^\intercal \Sigma^{-1}_p \mathbf{w})) \\
                                & \propto \exp(- \frac{1}{2}( \sigma_n^{-2}(\cancel{\mathbf{y}^\intercal\mathbf{y}} - \mathbf{y}^\intercal X^\intercal \mathbf{w} - \mathbf{w}^\intercal X\mathbf{y} + \mathbf{w}^\intercal X X^\intercal \mathbf{w}) +\mathbf{w}^\intercal \Sigma^{-1}_p \mathbf{w})) &\text{(remove constant)}\\
                                & \propto \exp(- \frac{1}{2}( -\sigma_n^{-2}\mathbf{y}^\intercal X^\intercal \mathbf{w} - \sigma_n^{-2} \mathbf{w}^\intercal X\mathbf{y} + \sigma_n^{-2}\mathbf{w}^\intercal X X^\intercal \mathbf{w} +\mathbf{w}^\intercal \Sigma^{-1}_p \mathbf{w}))\\
                                & \propto \exp(- \frac{1}{2}( -\sigma_n^{-2}\mathbf{y}^\intercal X^\intercal \mathbf{w} - \sigma_n^{-2} \mathbf{w}^\intercal X\mathbf{y} + \mathbf{w}^\intercal ( \sigma_n^2 X X^\intercal + \Sigma^{-1}_p) \mathbf{w})) &(\text{note that, }\mathbf{y}^\intercal X^\intercal \mathbf{w} = \mathbf{w}^\intercal X\mathbf{y})\\
                                & \propto \exp(- \frac{1}{2}( -2\sigma_n^{-2}\mathbf{y}^\intercal X^\intercal \mathbf{w} + \mathbf{w}^\intercal ( \sigma_n^{-2} X X^\intercal + \Sigma^{-1}_p) \mathbf{w}))\\
\end{aligned}
$$

let us define:

$$
\begin{aligned}
    \mathbf{M} &= \sigma_n^{-2}XX^\intercal + \Sigma_p^{-1} \\
    \mathbf{b} &= \sigma_n^{-2}X\mathbf{y}
\end{aligned}
$$

thus:

$$
\begin{aligned}
    \mathbf{M}^{-1}\mathbf{b}   &= (\sigma_n^{-2}XX^\intercal + \Sigma_p^{-1})^{-1} \sigma_n^{-2}X\mathbf{y}\\
                                &= \sigma_n^{-2}(\sigma_n^{-2}XX^\intercal + \Sigma_p^{-1})^{-1} X\mathbf{y}\\
                                &= \tilde{\mathbf{w}}
\end{aligned}
$$

finally using equality of the completing the square formula, we can get:

$$
\begin{aligned}
    p(\mathbf{w}|X,\mathbf{y})  & \propto \exp(-\frac{1}{2} (\mathbf{w} - \mathbf{M}^{-1} \mathbf{b})^\intercal \mathbf{M} (\mathbf{w}-\mathbf{M}^{-1} \mathbf{b}) - \cancel{\mathbf{b}^\intercal \mathbf{M}^{-1} \mathbf{b}})  &\text{(remove constant)}\\
                                & \propto \exp(-\frac{1}{2} (\mathbf{w} - \tilde{\mathbf{w}})^\intercal \mathbf{M} (\mathbf{w}-\tilde{\mathbf{w}})) \\
                                & \propto \exp(-\frac{1}{2} (\mathbf{w} - \tilde{\mathbf{w}})^\intercal (\sigma_n^{-2}XX^\intercal + \Sigma_p^{-1}) (\mathbf{w}-\tilde{\mathbf{w}})) \\
\end{aligned}
$$

As we can see from the formula above, we can rewrite it as a gaussian distribution with the following form:

$$
\begin{aligned}
p(\mathbf{w} \mid X, \mathbf{y}) \sim \mathcal{N}\left(\tilde{\mathbf{w}}=\frac{1}{\sigma_n^2} A^{-1} X \mathbf{y}, A^{-1}\right)
\end{aligned}
$$

where $A = \sigma_n^{-2}XX^\intercal + \Sigma_p^{-1}$

That's it, we have derived the closed form formula for the MAP of gaussian posterior (formula 2.8 of the GPML book).

Note: If you notice some errors in the derivation and/or the note, please let me know!

### References:

- [C.E.Rasmussen, C.K.I.Williams - GaussianProcessesforMachineLearning](https://gaussianprocess.org/gpml/)
- [Kevin P. Murphy - Probabilistic Machine Learning: An Introduction](https://probml.github.io/pml-book/book1.html)
- [David S. Rosenberg - Completing the Square](https://davidrosenberg.github.io/mlcourse/Notes/completing-the-square.pdf)
