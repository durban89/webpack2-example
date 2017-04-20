class DefaultController {
  async index(ctx, next) {
    await ctx.render('index');
  }
}

export default DefaultController;
